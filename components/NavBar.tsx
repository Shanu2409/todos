import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className='flex justify-between items-center bg-slate-600 px-8 py-3'>
      <Link href="/" className='text-white font-bold text-lg hover:text-slate-300 transition-colors'>
        Notes Up
      </Link>
      <Link href="/addTopic" className='bg-slate-800 px-4 py-2 rounded-lg text-white hover:bg-slate-700 transition-colors'>
        Add Topic
      </Link>
    </nav>
  );
};

export default NavBar;
