import "./SpinnerLogo.scss";

const SpinnerLogo = ({ size = 64, className = "", animate = "infinite" }) => {
  const ringClassMap = {
    infinite: "spin_ring spin_ring_infinite",
    once: "spin_ring spin_ring_once",
    none: "",
  };

  return (
    <div className={`spinner_logo ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className={ringClassMap[animate]}>
          <path
            d="M6 32C6 27.9672 6.91977 24.1437 8.5625 20.7324C9.04175 19.7372 10.2372 19.3186 11.2324 19.7979C12.2274 20.2772 12.6452 21.4727 12.166 22.4678C10.7784 25.3493 10 28.5809 10 32C10 44.1503 19.8497 54 32 54C44.1503 54 54 44.1503 54 32C54 19.8497 44.1503 10 32 10C30.8954 10 30 9.10457 30 8C30 6.89543 30.8954 6 32 6C46.3594 6 58 17.6406 58 32C58 46.3594 46.3594 58 32 58C17.6406 58 6 46.3594 6 32Z"
            fill="url(#paint0)"
          />
        </g>

        <path
          d="M30.5361 17.6321C31.3358 16.7894 32.661 16.7893 33.4608 17.6319C36.9349 21.2921 39.0894 26.3769 39.0894 32C39.0894 37.6231 36.935 42.7079 33.4607 46.3681C32.6609 47.2107 31.3358 47.2106 30.5361 46.3679C27.0628 42.7077 24.9102 37.6225 24.9102 32C24.9102 26.3775 27.0629 21.2924 30.5361 17.6321Z"
          fill="url(#paint1)"
        />

        <path
          d="M17.6321 30.5381C16.7894 31.3377 16.7893 32.6629 17.6319 33.4627C21.2921 36.9369 26.3769 39.0914 32 39.0914C37.6231 39.0913 42.7079 36.9369 46.3681 33.4627C47.2107 32.6629 47.2106 31.3377 46.3679 30.5381C42.7077 27.0648 37.6225 24.9122 32 24.9121C26.3775 24.9121 21.2924 27.0648 17.6321 30.5381Z"
          fill="url(#paint2)"
        />

        <path
          d="M32 24.9121C34.157 24.9121 36.2343 25.2303 38.1826 25.8174C38.7701 27.7663 39.0889 29.8442 39.0889 32.002C39.0888 34.1591 38.7697 36.2362 38.1826 38.1846C36.2342 38.7716 34.1571 39.0908 32 39.0908C29.8422 39.0908 27.7643 38.772 25.8154 38.1846C25.2284 36.2363 24.9102 34.159 24.9102 32.002C24.9102 29.8443 25.228 27.7662 25.8154 25.8174C27.7643 25.23 29.8423 24.9121 32 24.9121Z"
          fill="url(#paint3)"
        />

        <defs>
          <linearGradient
            id="paint0"
            x1="46.1831"
            y1="9.97225"
            x2="37.7584"
            y2="60.3007"
          >
            <stop stopColor="#66BFFF" />
            <stop offset="1" stopColor="#7D1DFC" />
          </linearGradient>

          <linearGradient
            id="paint1"
            x1="35.8672"
            y1="19.2917"
            x2="26.4739"
            y2="45.8141"
          >
            <stop stopColor="#66BFFF" />
            <stop offset="1" stopColor="#7D1DFC" />
          </linearGradient>

          <linearGradient
            id="paint2"
            x1="20.9486"
            y1="39.1851"
            x2="42.4981"
            y2="25.9239"
          >
            <stop stopColor="#3C5CFB" />
            <stop offset="1" stopColor="#CE7CFE" />
          </linearGradient>

          <linearGradient
            id="paint3"
            x1="26.1074"
            y1="37.8935"
            x2="37.893"
            y2="26.1079"
          >
            <stop stopColor="#2912F8" />
            <stop offset="1" stopColor="#876DFE" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default SpinnerLogo;
