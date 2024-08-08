import Image from "next/image";
import { IoBrowsersOutline, IoCalculator, IoFootball, IoHeartOutline, IoLogoReact } from "react-icons/io5";
import { SidebarMenuItem } from ".";


const menuItems = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsersOutline size={30}/>,
    title: 'Dashboard',
    subTitle: 'Visualización'
  },
  {
    path: '/dashboard/counter',
    icon: <IoCalculator size={30}/>,
    title: 'Counter',
    subTitle: 'Contador Client Side'
  },
  {
    path: '/dashboard/pokemons',
    icon: <IoFootball size={30}/>,
    title: 'Pokemons',
    subTitle: 'Generación Estática'
  },
  {
    path: '/dashboard/favorites',
    icon: <IoHeartOutline size={30} />,
    title: 'Favoritos',
    subTitle: 'Global state'
  },
]

export const Sidebar = () => {
  return (
    <div
      id="menu"
      className="bg-gray-900 min-h-full z-10 text-slate-300 left-0 no-scrollbar"
    >
      <div id="logo" className="py-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="mr-2"/>
          <span>Dash</span>
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>

      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              width={50}
              height={50}
              alt="User avatar"
              priority
            />
          </span>
          <span className="text-sm md:text-base font-bold">Luis Gonzales</span>
        </a>
      </div>

      <div id="nav" className="w-full px-6">
        {
          menuItems. map(item => (
            <SidebarMenuItem key={item.path} {...item}/>
          ))
        }
    
      </div>
    </div>
  );
};
