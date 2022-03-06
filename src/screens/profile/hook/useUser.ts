import { useDispatch, useSelector } from "react-redux";

import { FriendInterface } from "../../../interface";
import action from "../../../store/actions";
import { useHistory } from "react-router-dom";
import { MESSAGE } from "../../../router/route";
import { AppState } from "../../../interface/redux";
import API from "../../../api";
import { errorAPI } from "../../../components/Error";
import { useCallback, useMemo } from "react";

const useUser = (_id: any) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const friendList = useSelector(
        (state: AppState) => state.userState.user?.friends
    );

    const friend = useMemo(() => {
        return friendList?.filter((f) => f.idFriend === _id);
    }, [_id, friendList]);

    const setListFriend = useCallback(
        (friends: FriendInterface[]) => {
            dispatch(action.setFriends(friends));
        },
        [dispatch]
    );

    const getIdMessage = useCallback(async (idFriend: string) => {
        try {
            const res = await API.user.getChatUser(idFriend);
            return res.data._id;
        } catch (e) {
            errorAPI(e);
        }
        return null;
    }, []);

    const goToMessage = useCallback(async () => {
        const messId = await getIdMessage(_id);
        if (messId) {
            history.push(`${MESSAGE}/${messId}`);
        }
    }, [_id, getIdMessage, history]);

    const addFriend = useCallback(
        async (idFriend: string) => {
            try {
                const res = await API.user.addFriend(idFriend);
                setListFriend(res.data.friends);
            } catch (e) {
                errorAPI(e);
            }
        },
        [setListFriend]
    );

    const unFriend = useCallback(
        async (idFriend: string) => {
            try {
                const res = await API.user.unfriend(idFriend);
                setListFriend(res.data.friends);
            } catch (e) {
                errorAPI(e);
            }
        },
        [setListFriend]
    );

    const acceptFriend = useCallback(
        async (idFriend: string) => {
            try {
                const res = await API.user.acceptFriend(idFriend);
                setListFriend(res.data.friends);
            } catch (e) {
                errorAPI(e);
            }
        },
        [setListFriend]
    );

    return {
        friend,
        goToMessage,
        addFriend,
        unFriend,
        acceptFriend,
    };
};
export default useUser;
