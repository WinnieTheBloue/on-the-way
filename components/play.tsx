export const Play = ({ active }: { active: boolean }) => {
  if (active) {
    return (
      <svg
        width="54"
        height="54"
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="27" cy="27" r="27" fill="#1C8D70" />
        <path
          d="M32.7096 25.1994C33.0793 25.396 33.3885 25.6894 33.6041 26.0484C33.8198 26.4073 33.9337 26.8181 33.9337 27.2368C33.9337 27.6556 33.8198 28.0664 33.6041 28.4253C33.3885 28.7843 33.0793 29.0777 32.7096 29.2743L22.8477 34.6371C21.2597 35.5015 19.3092 34.3777 19.3092 32.6004V21.8741C19.3092 20.096 21.2597 18.973 22.8477 19.8358L32.7096 25.1994Z"
          stroke="#F8F8F8"
          strokeWidth="2.5"
        />
      </svg>
    );
  } else {
    return (
      <svg
        width="54"
        height="54"
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="27" cy="27" r="27" fill="#1B4332" />
        <path
          d="M18 21.6C18 19.9026 18 19.0548 18.5274 18.5274C19.0548 18 19.9026 18 21.6 18C23.2974 18 24.1452 18 24.6726 18.5274C25.2 19.0548 25.2 19.9026 25.2 21.6V32.4C25.2 34.0974 25.2 34.9452 24.6726 35.4726C24.1452 36 23.2974 36 21.6 36C19.9026 36 19.0548 36 18.5274 35.4726C18 34.9452 18 34.0974 18 32.4V21.6ZM28.8 21.6C28.8 19.9026 28.8 19.0548 29.3274 18.5274C29.8548 18 30.7026 18 32.4 18C34.0974 18 34.9452 18 35.4726 18.5274C36 19.0548 36 19.9026 36 21.6V32.4C36 34.0974 36 34.9452 35.4726 35.4726C34.9452 36 34.0974 36 32.4 36C30.7026 36 29.8548 36 29.3274 35.4726C28.8 34.9452 28.8 34.0974 28.8 32.4V21.6Z"
          fill="#D9D9D9"
        />
      </svg>
    );
  }
};
