import React from "react";

export default function Home() {
  const [value, setValue] = React.useState({
    val1: "",
    val2: "",
  });

  const [s, setS] = React.useState(false);

  const [final, setFinal] = React.useState();

  const handleVal1 = (event) => {
    setValue({ ...value, val1: event.target.value });
  };
  const handleVal2 = (event) => {
    setValue({ ...value, val2: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setS(true);
    const x = parseFloat(value.val1);
    const y = parseFloat(value.val2);
    const finalx = ((y - x) / x) * 100;
    setFinal(finalx);
  };

  const resetForm = (e) => {
    e.preventDefault();
    setS(false);
    setValue({
      val1: "",
      val2: "",
    });
  };

  return (
    <>
      <div className="min-h-full">
        <header className=" bg-neutral-800">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="md:text-3xl text-2xl font-extrabold text-neutral-200 text-transparent bg-clip-text bg-gradient-to-br from-[#B3FFAB] to-[#12FFF7]">
              Percentage Calculator
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-neutral-700 rounded-xl md:p-10 p-6">
                <div className="mb-6">
                  <form id="myform" action="" onSubmit={handleSubmit}>
                    <label className="block mb-3 font-bold text-gray-900 dark:text-gray-300">
                      First Value
                    </label>
                    <input
                      type="number"
                      name="value1"
                      value={value.val1}
                      onChange={handleVal1}
                      className="bg-neutral-700 bg text-neutral-200 font-semibold text-lg rounded block w-full p-2.5 mt-5"
                      required
                    ></input>
                    <label className="block mb-3 font-bold text-gray-900 dark:text-gray-300 mt-10">
                      Second Value
                    </label>
                    <input
                      type="number"
                      name="value2"
                      value={value.val2}
                      onChange={handleVal2}
                      className="bg-neutral-700 bg text-neutral-200 font-semibold text-lg rounded block w-full p-2.5 mt-5"
                      required
                    ></input>
                    <button
                      className="rounded bg-green-400 font-bold px-4 py-2 mt-8"
                      onClick={() => handleSubmit}
                    >
                      Calculate
                    </button>
                    <button
                      onClick={resetForm}
                      className="rounded bg-rose-800 text-white font-bold px-4 py-2 mt-8 ml-4"
                    >
                      Reset
                    </button>
                  </form>
                </div>
                {s ? (
                  <div className="pt-5">
                    {final >= 0 ? (
                      <p className=" font-bold md:text-xl text-lg font- text-emerald-400 ">
                        Percentage Increase = {Math.abs(final).toFixed(2)}%
                      </p>
                    ) : (
                      <p className=" font-bold md:text-xl text-lg font- text-rose-400">
                        Percentage Decrease = {Math.abs(final).toFixed(2)}%
                      </p>
                    )}
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
