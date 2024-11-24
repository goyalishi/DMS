import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileDropDown = (props) => {

    const [state, setState] = useState(false)
    const profileRef = useRef()
    const authStatus = useSelector((state) => state.auth.status);

    const navigation = [
        { title: "Dashboard", path: "javascript:void(0)" },
        { title: "Settings", path: "javascript:void(0)" },
        { title: "Log out", path: "javascript:void(0)" },
    ]

    
    useEffect(() => {
        const handleDropDown = (e) => {
            if (!profileRef.current.contains(e.target)) setState(false)
        }
        document.addEventListener('click', handleDropDown)
    }, [])

    return (
        <div className={`relative ${props.class}`}>
            <div className="flex items-center space-x-4">
                {authStatus ? <button ref={profileRef} className="w-10 h-10 outline-none rounded-full "
                    onClick={() => setState(!state)}
                ><img
                        src="https://img.icons8.com/?size=100&id=teAmm8wzAnK7&format=png&color=000000"
                        className="w-full h-full rounded-full object-fill"
                    />
                </button> : <Link to="/login" className="text-gray-900 px-4 py-2 rounded-full border">Login/Register</Link>}
                <div className="lg:hidden">
                    <span className="block">Micheal John</span>
                    <span className="block text-sm text-gray-500">john@gmail.com</span>
                </div>
            </div>
            <ul className={`bg-white top-12 right-0 mt-2 z-90 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${state ? '' : 'lg:hidden'}`}>
                {
                    navigation.map((item, idx) => (
                        <li>
                            <a key={idx} className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5 z-90" href={item.path}>
                                {item.title}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default () => {

    const [menuState, setMenuState] = useState(false)

  const navigation = [
      { title: "Browse Fundraisers", path: "/browse" },
      { title: "Start a Fundraiser", path: "/start-campaign" },
      { title: "Donate Now", path: "/donate" },
  ]
    return (
        <nav className="bg-white border-b">
            <div className="flex items-center space-x-8 px-4 max-w-screen-xl mx-auto md:px-8">
                <div className="flex-none lg:flex-initial">
                    <a href="javascript:void(0)">
                        <img
                            src="../images/logo.png" 
                            width={60}
                            alt="Logo"
                        />
                    </a>
                </div>
                <div className="flex-1 flex items-center justify-between">
                    <div className={`bg-white absolute z-90 w-full top-16 left-0 p-4 border-b lg:static lg:block lg:border-none ${menuState ? '' : 'hidden'}`}>
                        <ul className="z-90 mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
                            {
                                navigation.map((item, idx) => (
                                    <li key={idx} 
                                    className="z-90 text-gray-900 relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-gray-900 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-1000 after:origin-left">
                                        <a href={item.path}>
                                            {item.title}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                        <ProfileDropDown 
                            class="mt-5 pt-5 border-t lg:hidden z-50"
                        />
                    </div>
                    <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
                        
                        <ProfileDropDown 
                            class="hidden lg:block z-50"
                        />
                        <button 
                            className="outline-none text-gray-400 block lg:hidden"
                            onClick={() => setMenuState(!menuState)}
                        >
                            {
                                menuState ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
