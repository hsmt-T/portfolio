import SectionTitle from "../../ui/SectionTitle";
import "./Profile.css";
import profileImg from "../../../assets/img/profileImg.png"; 
import SocialLinks from "../../ui/SocialLinks";

const Profile = () => {
    return (
        <section className="profile" id="profile">
            <SectionTitle title="Profile"/>
            
            <div className="profile-container">
                <div className="profile-text">
                    <p><span>所属：</span> ECCコンピュータ専門学校(28卒)</p>
                    <p><span>名前：</span> 橋本剛志</p>
                    <p><span>生年月日：</span> 2005/05/17</p>
                    <p><span>趣味：</span> 音楽を聴くこと 話すこと</p>
                    <p><span>志望：</span> アプリケーションエンジニア(バックエンド)</p>
                </div>
                
                <div className="profile-image-wrapper">
                    <img src={profileImg} alt="プロフィール写真"/>
                </div>
            </div>
            <div className="links">
                <SocialLinks/>
            </div>
        </section>
    );
};

export default Profile;