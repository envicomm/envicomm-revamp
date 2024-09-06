import Hagnaya from "../assets/Hagnaya.png";
import Eastland from "../assets/Eastland.png";
import Shemberg from "../assets/Shemberg.png";

export const FeedBackPage = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800 ">
      <div className="container xl:px-6 xl:py-12 mx-auto">
        <div className="grid items-center gap-4 xl:grid-cols-5">
          <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
            <h2 className="text-4xl font-bold">We Value Your Feedback</h2>
            <p className="dark:text-gray-600">
              Thank you for taking the time to share your thoughts with us. Your
              feedback is important and helps us improve our services. Please
              let us know what we did well and how we can enhance your
              experience.
            </p>
          </div>
          <div className="xl:p-6 xl:col-span-3">
            <div className="grid gap-24 md:grid-cols-2">
              <div className="grid content-center gap-24">
                <div className="p-6 xl:p-6 rounded shadow-md dark:bg-gray-50">
                  <p>
                    "I am very satisfied with the service provided by Envi-comm.
                    The quality of their work is excellent, and both the staff
                    and team leader are highly professional in their respective
                    fields.”
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src={Eastland}
                      alt=""
                      className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                    />
                    <div>
                      <p className="text-lg font-semibold">
                        EASTLAND PROPERTY VENTURES, INC.
                      </p>
                      <p className="text-sm dark:text-gray-600">
                        Proposed 10-Storey Socialized Condominium Development
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded shadow-md dark:bg-gray-50">
                  <p>
                    So far, I love the service here at Envi-comm Corporation,
                    and I can truly say that their service is excellent.
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src={Hagnaya}
                      alt=""
                      className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                    />
                    <div>
                      <p className="text-lg font-semibold">
                        HAGNAYA BEACH RESORT
                      </p>
                      <p className="text-sm dark:text-gray-600">
                        Beach Resort Project
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid content-center gap-4">
                <div className="p-6 rounded shadow-md dark:bg-gray-50">
                  <p>
                    “We are very satisfied with your service, and if I'm going
                    to rate it from 1 to 10, it is always 10.”
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src={Shemberg}
                      alt=""
                      className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                    />
                    <div>
                      <p className="text-lg font-semibold">
                        SHEMBERG-INGREDIENTS GUMS AND CORPORATION
                      </p>
                      <p className="text-sm dark:text-gray-600">
                        SHEMBERG-INGREDIENTS GUMS AND CORPORATION
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="p-6 rounded shadow-md dark:bg-gray-50">
							<p>Te omnes virtute volutpat sed. Ei esse eros interesset vel, ei populo denique ocurreret vix, eu cum pertinax mandamus vituperatoribus. Solum nihil luptatum per ex, ei amet viderer eos. Ea illum labitur mnesarchum pro. Eius meis salutandi ei nam, alterum expetenda et nec. Expetenda intellegat at eum, per mazim sanctus honestatis ad. Ei noluisse invenire vix. Te ancillae patrioque qui, probo bonorum vivendum ex vim.</p>
							<div className="flex items-center mt-4 space-x-4">
								<img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
								<div>
									<p className="text-lg font-semibold">Leroy Jenkins</p>
									<p className="text-sm dark:text-gray-600">CTO of Company Co.</p>
								</div>
							</div>
						</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
