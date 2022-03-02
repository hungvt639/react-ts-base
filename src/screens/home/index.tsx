import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import API from "../../api";
import { errorAPI } from "../../components/Error";
import notify from "../../components/notify";
import { UserInterface } from "../../interface";
import { USER_PROFILE } from "../../router/const";
// import mqttClient from "../../utils/mqtt";

// mqttClient.subscribe(["notifications"], (error: any) => {
//     if (error) {
//         console.log("Subscribe to topics error", error);
//         return;
//     }
// });
const Home = () => {
    // const [notifies, setNotify] = useState<Notification[]>([]);

    // mqttClient.on("message", async function (topic, message) {
    //     const nt = await JSON.parse(await message.toString());
    //     setNotify([nt].concat(notifies));
    // });
    const { t } = useTranslation();
    // useEffect(() => {
    //     async function getNotification() {
    //         try {
    //             let noti: Notification[] = [];
    //             let res = await API.notification.getNotifyNotUser();
    //             noti = noti.concat(res.data);
    //             res = await API.notification.getNotifyForUser();
    //             noti = noti.concat(res.data);
    //             // setNotify(noti);
    //         } catch (e: any) {
    //             errorAPI(e);
    //         }
    //     }
    //     getNotification();
    // }, []);
    const [users, setUsers] = useState<UserInterface[]>([]);
    useEffect(() => {
        async function getUsers() {
            try {
                const res = await API.user.getUsers();
                setUsers(res.data);
            } catch (e) {
                errorAPI(e);
            }
        }
        getUsers();
    }, []);
    function showNotifySuccess() {
        notify.success(
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        );
    }
    function showNotifyError() {
        notify.error("Message is error");
    }
    return (
        <div>
            <div>{t("Home")}</div>
            <button onClick={showNotifySuccess}>success</button>
            <button onClick={showNotifyError}>error</button>

            {/* <div>Status {mqttClient.connected}</div> */}
            <div>
                {users.map((user: UserInterface, index: number) => (
                    <div className="border m-5" key={index}>
                        <Link to={`${USER_PROFILE}/${user._id}`}>
                            <p>{user._id}</p>
                            <p>{user.username}</p>
                            <p>{user.fullname}</p>
                        </Link>
                    </div>
                ))}
                {/* {notifies.map((notify: Notification, index: number) => (
                    <div key={index}>
                        <h2>{notify.head}</h2>
                        <p>{notify.content}</p>
                    </div>
                ))} */}
            </div>
        </div>
    );
};
export default Home;
