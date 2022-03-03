import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import API from "../../api";
import { errorAPI } from "../../components/Error";
import { UserInterface } from "../../interface";
import { USER_PROFILE } from "../../router/route";

const Home = () => {
    const { t } = useTranslation();

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

    return (
        <div>
            <div>{t("Home")}</div>
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
            </div>
        </div>
    );
};
export default Home;
