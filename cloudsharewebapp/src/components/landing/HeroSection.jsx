import { assets } from "../../assets/assets";

const HeroSection = ({ openSignIn, openSignUp }) => {
  return (
    <div className="landing-page-content relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-indigo-50 opacity-80 z-0 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">파일을 안전하게 공유하세요</span>
              <span className="block text-purple-500">Cloud Share</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              파일을 안전하게 업로드, 관리 및 공유하세요. 언제 어디서든 접속할
              수 있습니다.
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                <button
                  onClick={() => openSignUp()}
                  className="flex items-center px-6 py-3 border-transparent text-base font-medium rounded-md text-white bg-purple-500 hover:bg-purple-600 md:py-4 md:text-lg md:px-10 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  시작하기
                </button>
                <button
                  onClick={() => openSignIn()}
                  className="flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  로그인
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-w-16 rounded-lg shadow-xl overflow-hidden">
            <img
              src={assets.dashboard}
              alt="cloudshare dashboard"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-10 rounded-lg"></div>
        </div>
        <div className="mt-8 text-center">
          <p className="mt-4 text-base text-gray-500">
            모든 파일은 기업 수준의 보안 프로토콜을 사용하여 암호화되고 안전하게
            저장됩니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
