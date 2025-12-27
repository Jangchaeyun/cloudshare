const PricingSection = ({ pricingPlans }) => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            간단하고 투명한 가격 책정
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            나에게 맞는 요금제를 선택하세요
          </p>
        </div>
        <div className="mt-16 space-y-12 lg:space-y-0 lg:grid-cols-3 lg:gap-8">
          {pricingPlans.map((plan, index) => {
            <div
              key={index}
              className={`flex flex-col shadow-lg overflow-hidden ${
                plan.highlighted
                  ? "border-2 border-purple-500 transform scale-105"
                  : "border border-gray-200"
              }`}
            >
              
            </div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
