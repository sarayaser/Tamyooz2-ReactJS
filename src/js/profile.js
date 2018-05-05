import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import ProfileSideMenu from './profileSideMenu';
import ProfileSection from './profileSection';

class Profile extends Component {
    render() {

        let sideMenuItems = ["البيانات الشخصية", "تغيير كلمة المرور", "عربتي", "لوحات أبوظبي", "السيارات",
            "لوحات أم القيوين", "لوحات الفجيرة", "لوحات رأس الخيمة", "لوحات الشارقة"];

        let section1 = [["Mohamed Mohsen Abd el aal", "الاسم بالكامل"], ["N/A", "الجنسية"], ["N/A", "نوع الهوية"],
        ["N/A", "رقم الهوية"], ["العربية", "اللغة"]];

        let section2 = [["Mohamed Mohsen Abd el aal", "العنوان 1"], ["N/A", "العنوان 2"], ["N/A", "المدينة"],
        ["N/A", "الدولة"], ["العربية", "رقم هاتف ارضي"], ["العربية", "صندوق بريد"]];

        let section3 = [["Mohamed Mohsen Abd el aal", "البيان المروري"], ["N/A", "الرمز المروري"],
        ["N/A", "رقم اللوحة"], ["N/A", "مصدر اللوحة"], ["العربية", "الفئة"], ["العربية", "رقم رخصة القيادة"],
        ["العربية", "جهة الاصدار"]];

        let section4 = [["Mohamed Mohsen Abd el aal", "البريد الالكتروني"], ["N/A", "الهاتف 1"], ["N/A", "الهاتف 2"]];

        return (

            <div>
                <Header />
                <ProfileSideMenu menuItems={sideMenuItems} />
                <aside id="data">
                    <ProfileSection id="personalInfo" h2="معلومات شخصية" items={section1} />
                    <hr />
                    <ProfileSection id="address" h2="العنوان" items={section2} />
                    <hr />
                    <ProfileSection id="trafficInfo" h2="معلومات الملف المروري" items={section3} />
                    <hr />
                    <ProfileSection id="contactInfo" h2="معلومات الاتصال" items={section4} />
                    <hr />
                    <section id="personalDocumnets">
                        <h2>مستندات شخصية</h2>
                        <a href="#">اضغط هنا لإضافة مستندات جديدة</a>
                    </section>
                </aside>
                <Footer />
            </div>

        );
    }
}

export default Profile;
