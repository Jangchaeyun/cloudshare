const CTASection = ({ openSignUp }) => {
  return (
    <div className="bg-purple-500">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">시작할 준비 되셨나요?</span>
          <span className="block text-purple-100">
            지금 바로 계정을 만드세요.
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <button
              onClick={() => openSignUp()}
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-purple-50 transition-colors duration-200"
            >
              무료로 가입하세요
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
