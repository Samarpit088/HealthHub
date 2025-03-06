import { Link, useLocation } from 'react-router-dom';
export default function AccountNav() {
    const { pathname } = useLocation();
    let subpage = pathname.split('/')[2];
    if (subpage === undefined) {
        subpage = 'profile';
    }
    function linkClasses(type = null) {
        // const active = pathname === '/account' && type === 'profile';
        let classes = 'inline-flex gap-1 py-2 px-6 rounded-full text-[#06182B]';
        if (type === subpage) {
            classes += ' bg-[#ABBFCF]';
        }
        else {
            classes += ' bg-[#C2D6E3]';
        }
        return classes;
    }

    return (
        <div>
            <nav className="w-full flex justify-center mt-8 gap-4">
                <Link className={linkClasses('profile')} to={'/account'}>
                    My Profile
                </Link>
                <Link className={linkClasses('myappointment')} to={'/account/myappointment'}>
                    My appointments
                </Link>
            </nav>
        </div>
    );
}