export function Header() {
  return (
    <header>
      <nav>
        <div className="bg-white px-4 h-[38px] border-b border-timem-gray-100 flex items-center">
          {/* header-left */}
          <div className="flex-1 flex items-center">
            <span className="font-bold text-xs tracking-wide text-timem-gray-700 mr-2">
              HOME
            </span>
          </div>
          {/* header-right */}
          <div className="flex">
            <button className="px-2 py-1 bg-timem-primary-100 flex items-center">
              <span className="font-medium text-xs tracking-wide text-timem-primary-900 mr-2">
                Logout
              </span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.27781 10.8889C5.27781 10.5514 5.0042 10.2778 4.66669 10.2778H1.61114V1.72222H4.66669C5.0042 1.72222 5.27781 1.44862 5.27781 1.11111C5.27781 0.773603 5.0042 0.5 4.66669 0.5H1.61114C0.936124 0.5 0.388916 1.04721 0.388916 1.72222V10.2778C0.388916 10.9528 0.936124 11.5 1.61114 11.5H4.66669C5.0042 11.5 5.27781 11.2264 5.27781 10.8889Z"
                  className="fill-timem-primary-900"
                />
                <path
                  d="M11.825 6.42811C11.8816 6.37046 11.9245 6.30436 11.9537 6.23392C11.9833 6.1624 11.9998 6.08403 12 6.00183L12 6L12 5.99817C11.9996 5.84238 11.9399 5.68674 11.821 5.56788L9.37659 3.12343C9.13794 2.88478 8.75101 2.88478 8.51235 3.12343C8.2737 3.36209 8.2737 3.74902 8.51235 3.98768L9.91356 5.38889H4.05558C3.71808 5.38889 3.44447 5.66249 3.44447 6C3.44447 6.33751 3.71808 6.61111 4.05558 6.61111H9.91356L8.51235 8.01232C8.2737 8.25098 8.2737 8.63791 8.51235 8.87657C8.75101 9.11522 9.13794 9.11522 9.37659 8.87657L11.8206 6.43256L11.825 6.42811Z"
                  className="fill-timem-primary-900"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
