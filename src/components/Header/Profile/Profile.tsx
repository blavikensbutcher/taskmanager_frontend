import {useProfile} from "@/hooks/useProfile";
import styles from "@/components/Header/Profile/profile.module.css";
import Loader from "@/components/ui/Loader";

export const Profile = () => {
    const { data, isLoading } = useProfile()

    return (
        <div className={styles.container}>
            {isLoading ? (
                <Loader />
            ) : (
                <div className={styles.outer_container}>
                    <div className={styles.inner_container}>
                        <p className={styles.name}>{data?.user.name}</p>
                        <p className={styles.email}>{data?.user.email}</p>
                    </div>

                    <div className={styles.avatar}>
                        {data?.user.name?.charAt(0) || 'A'}
                    </div>
                </div>
            )}
        </div>
    )
}
