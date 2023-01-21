import { css } from "@emotion/react";
import Link from "next/link";
import { Logo } from "components/logo/Logo";

export function Sidebar({}) {
  return (
    <div
      css={css({ width: 240 })}
      className="bg-white border-r border-timem-gray-100 flex-shrink-0"
    >
      {/* logo */}
      <div className="p-4 flex items-center">
        <Logo width={19} variant={32} />
        <span className="text-timem-primary-900 text-xs font-medium tracking-normal ml-2">
          TIMEM
        </span>
      </div>
      {/* profile */}
      <div className="py-4">
        <div className="py-2 px-4">
          <div className="flex">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 1.2C4.52724 1.2 3.33333 2.27452 3.33333 3.6C3.33333 4.92548 4.52724 6 6 6C7.47276 6 8.66667 4.92548 8.66667 3.6C8.66667 2.27452 7.47276 1.2 6 1.2ZM2 3.6C2 1.61177 3.79086 0 6 0C8.20914 0 10 1.61177 10 3.6C10 5.58823 8.20914 7.2 6 7.2C3.79086 7.2 2 5.58823 2 3.6ZM3.33333 9.6C2.22876 9.6 1.33333 10.4059 1.33333 11.4C1.33333 11.7314 1.03486 12 0.666667 12C0.298477 12 0 11.7314 0 11.4C0 9.74314 1.49239 8.4 3.33333 8.4H8.66667C10.5076 8.4 12 9.74315 12 11.4C12 11.7314 11.7015 12 11.3333 12C10.9651 12 10.6667 11.7314 10.6667 11.4C10.6667 10.4059 9.77124 9.6 8.66667 9.6H3.33333Z"
                fillOpacity="0.8"
                className="fill-timem-gray-700"
              />
            </svg>
            <span className="text-sm ml-2 tracking-normal font-bold text-timem-gray-700">
              MAHMOOD SAGHARJOOGHI
            </span>
          </div>
        </div>
      </div>
      {/* sidebar-links */}
      {/* group-1 */}
      <div className="p-2">
        <div className="pb-2 border-b border-timem-gray-100">
          <div className="py-2 px-2 font-bold tracking-normal text-sm text-timem-gray-500">
            PAGES
          </div>
          <ul>
            <li className="cursor-pointer font-bold tracking-normal text-sm text-timem-gray-700 active:text-timem-gray-900 hover:bg-timem-light-gray-900">
              <Link href="/" className="block w-full py-2 px-2">
                HOME
              </Link>
            </li>
            <li className="cursor-pointer font-bold tracking-normal text-sm text-timem-gray-700 active:text-timem-gray-900 hover:bg-timem-light-gray-900">
              <Link href="/timeline" className="block w-full py-2 px-2">
                TIMELINE
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* group-2 */}
      <div className="p-2 pt-0">
        <div>
          <div className="py-2 px-2 font-bold tracking-normal text-sm text-timem-gray-500">
            SETTINGS
          </div>
          <ul>
            <li className="cursor-pointer font-bold tracking-normal text-sm text-timem-gray-700 active:text-timem-gray-900 hover:bg-timem-light-gray-900">
              <Link href="/profile" className="block w-full py-2 px-2">
                PROFILE
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
