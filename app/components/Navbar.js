import { useState, useEffect } from 'react';
import './navbar.css';
import { Dialog, Popover } from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

import { RiSeedlingLine } from 'react-icons/ri';
import { SiOverleaf } from 'react-icons/si';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// import { SessionProvider } from 'next-auth/react';
// const products = [
//   {
//     name: '找好茶茶葉推薦',
//     href: '/goodtea',
//     icon: RiSeedlingLine,
//   },
//   {
//     name: '泡好茶',
//     href: '/brewgoodtea',
//     icon: SiOverleaf,
//   },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

export default function Navbar() {
  const currentRoute = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pathname, setPathname] = useState('/');
  // const [activePath, setActivePath] = useState('/');

  // useEffect(() => {
  //   setActivePath(window.location.pathname);
  // }, [pathname]);
  // const { data: session } = useSession();
  // const user = useUser();

  return (
    // <header className="bg-gradient-to-t from-gray-100 to-gray-300">
    <header className="">
      {/* {console.log(session.user.name)} */}
      <nav
        className="mx-auto flex items-center justify-between pt-3 pb-3 pl-6 pr-6 lg:px-8 navbar"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-10 logo" src="images/logo.png" alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className={`text-lg font-semibold leading-6 nav-item ${
              currentRoute === '/' ? 'active' : ''
            }`}
          >
            木柵茶本舖
          </Link>
          {/* <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-gray-500 hover:text-gray-900">
              產品
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-lg leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-lime-400"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover> */}
          <Link
            href="/goodtea"
            className={`text-lg font-semibold leading-6 nav-item ${
              currentRoute === '/goodtea' ? 'active' : ''
            }`}
            onClick={() => setPathname('/goodtea')}
          >
            找好茶
          </Link>
          <Link
            href="/brewgoodtea"
            className={`text-lg font-semibold leading-6 nav-item ${
              currentRoute === '/brewgoodtea' ? 'active' : ''
            }`}
            onClick={() => setPathname('/brewgoodtea')}
          >
            泡好茶
          </Link>
          <Link
            href="/chatea"
            className={`text-lg font-semibold leading-6 nav-item ${
              currentRoute === '/chatea' ? 'active' : ''
            }`}
            onClick={() => setPathname('/chatea')}
          >
            CHATEA
          </Link>
          <Link
            href="/reservation"
            className={`text-lg font-semibold leading-6 nav-item ${
              currentRoute === '/reservation' ? 'active' : ''
            }`}
            onClick={() => setPathname('/reservation')}
          >
            品茶預約
          </Link>

          {/* <Link
            href="#"
            className="text-lg font-semibold leading-6 text-gray-500 hover:text-gray-900"
          >
            系統介紹
          </Link> */}
          <Link
            href="/processIntro"
            className={`text-lg font-semibold leading-6 nav-item ${
              currentRoute === '/processIntro' ? 'active' : ''
            }`}
            onClick={() => setPathname('/processIntro')}
          >
            泡茶流程
          </Link>

          {/* <a
            href="/about"
            className="text-lg font-semibold leading-6 text-gray-500 hover:text-gray-900"
          >
            關於我們
          </a> */}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/personalInformation"
            className="text-lg font-semibold leading-6 gray-500 hover:text-gray-900 mr-6"
          >
            <UserCircleIcon className="h-6 w-6 text-gray-500 hover:text-gray-900" />
          </a>
          <a
            href="/shoppingCart"
            className="text-lg font-semibold leading-6 gray-500 hover:text-gray-900 mr-6"
          >
            <ShoppingCartIcon className="h-6 w-6 text-gray-500 hover:text-gray-900" />
          </a>
          <a
            href="/api/auth/signout"
            className="text-lg font-semibold leading-6 text-gray-500 hover:text-gray-900"
          >
            Sign Out <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="images/tea.png" alt="" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {/* <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure> */}

                <a
                  href="/product"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  木柵茶本舖
                </a>
                <a
                  href="/goodtea"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  找好茶
                </a>
                <a
                  href="/brewgoodtea"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  泡好茶
                </a>
                <a
                  href="/reservation"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  品茶預約
                </a>
                <a
                  href="/processIntro"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  品茶流程
                </a>
                <a
                  href="/chatea"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  CHATEA
                </a>
                <a
                  href="/personalInformation"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  個人資料
                </a>
                <a
                  href="/shoppingCart"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  購物車
                </a>
              </div>
              <div className="py-6">
                <a
                  href="/api/auth/signout"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Sign Out
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
