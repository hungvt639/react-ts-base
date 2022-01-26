import { useCallback, useEffect, useState } from "react";
import API from "../../../api";
import {
    ChatInterface,
    MemberInterface,
    UserInterface,
} from "../../../interface";

const useMember = (chat: ChatInterface | undefined) => {
    const [profilesChat, setProfilesChat] = useState<UserInterface[]>([]);
    const getProfiles = useCallback(async () => {
        if (chat) {
            const profiles = await Promise.all(
                chat.member.map(async (m: MemberInterface) => {
                    const res = await API.user.getUser(
                        m.idUser,
                        "fullname avatar"
                    );
                    return res.data;
                })
            );
            setProfilesChat(profiles);
        }
    }, [chat]);
    useEffect(() => {
        getProfiles();
    }, [getProfiles]);

    return { profilesChat };
};
export default useMember;
