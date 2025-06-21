import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>MedZoom - Cancer & Anti-Ageing Research Institute</title>
        <meta name="description" content="MedZoom Health - Precision medicine and personalized cancer treatment research institute" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold text-red-700">MEDZOOM</div>
              <nav className="hidden md:flex space-x-8">
                <a href="/" className="text-red-700 font-semibold">Home</a>
                <a href="/research" className="text-gray-700 hover:text-red-700 transition-colors">Research</a>
                <a href="/what-drives-us" className="text-gray-700 hover:text-red-700 transition-colors">What Drives Us</a>
                <a href="#contact" className="text-gray-700 hover:text-red-700 transition-colors">Contact</a>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="container mx-auto px-4 py-8">
          {/* Apply background image to the whole grid */}
          <div className="relative rounded-lg shadow-lg overflow-hidden max-w-7xl mx-auto">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/background_img_1.jpg"
                alt="Background"
                fill
                className="object-cover opacity-10"
                priority
              />
            </div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 items-stretch">
              {/* About Us Section (row 1, col 1) */}
              <div className="p-8 flex flex-col h-full row-span-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  ABOUT US
                  <div className="w-20 h-2 bg-red-700 mt-2"></div>
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  We are a healthcare company licensed to provide unique, 
                  effective and robust technology services in Precision medicine 
                  with greater consideration towards affordability of common masses. 
                  We are committed to accelerate precision medicine into medical 
                  practice in both Indian and international markets. We believe 
                  to educate the young minds in the center of precision medicine 
                  and drug discovery to enable the humankind to battle the cancer 
                  menace and ageing diseases.
                </p>
              </div>

              {/* Center Logo Section (row 1, col 2) */}
              <div className="flex flex-col justify-center items-center h-full row-span-1">
                <div className="flex-col">
                  <div className="bg-white flex-col items-center pt-2 w-auto">
                    <div className="bg-red-700 text-white text-2xl font-bold flex items-center justify-center px-8 py-3 w-3/4 mx-auto">
                      M E D Z O O M
                    </div>
                    <div className="text-gray-500 text-3xl font-bold flex items-center justify-center text-center px-8 py-1 w-auto">
                      Cancer & Anti-Ageing Research Institute
                    </div>
                    <div className="relative w-3/4 h-1 bg-red-700 mx-auto rounded">
                      {/* Left circle */}
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-4 border-red-700 bg-white"></div>
                      {/* Right circle */}
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-4 border-red-700 bg-white"></div>
                    </div>
                    <div className="text-gray-500 text-3xl flex items-center justify-center px-8 py-1 font-semibold w-auto">
                      CAARI
                    </div>
                  </div>
                </div>
              </div>

              {/* Health Wealth Section - spans 2 rows (col 3, row 1-2) */}
              <div className="relative shadow-lg overflow-hidden row-span-2 flex flex-col">
                {/* Mild black overlay */}
                <div className="absolute inset-0 bg-black opacity-70 z-0 pointer-events-none" />
                <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                  <span className="w-56 h-4 bg-white m-4 block rounded"></span>
                  <h2 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
                    HEALTH
                    <br />WEALTH
                  </h2>
                  <span className="w-56 h-4 bg-white mb-4 ml-4 block rounded"></span>
                </div>
                {/* Red bar below the card (not affected by overlay) */}
                <div className="w-full h-3 bg-red-700 relative z-20" />
              </div>

              {/* RESEARCH / EDUCATE / SERVE + CONTACT Section as a single card with blue stripes (row 2, col 1-2) */}
              <div className="col-span-1 lg:col-span-2 flex flex-col h-full row-span-1">
                <div className="relative bg-white shadow-lg flex flex-col lg:flex-row overflow-hidden h-full">
                  {/* Top blue stripe */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-sky-400 my-2" />
                  {/* Bottom blue stripe */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-sky-400 my-2" />

                  <div className="flex-1 p-8 flex flex-col justify-center">
                    <h3 className="text-5xl font-bold text-gray-500 mb-4 ml-16">
                      RESEARCH
                      <br />EDUCATE
                      <br />SERVE
                    </h3>
                  </div>
                  <div className="flex-1 p-8 flex flex-col justify-center text-center">
                    <h3 className="text-3xl font-bold text-gray-500 mb-4">CONTACT US</h3>
                    <p className="text-gray-500 text-lg">www.medzoom.co.uk</p>
                  </div>
                </div>
              </div>

              {/* Row 3: Merged Card with Common Background */}
              <div className="lg:col-span-3 relative rounded-lg shadow-lg overflow-hidden min-h-[260px]">
                {/* Common background image for the entire card */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/images/background_img_1.jpg"
                    alt="Background"
                    fill
                    className="object-cover opacity-10"
                    priority
                  />
                </div>
                {/* Content overlay with grid to match column widths */}
                <div className="relative z-10 w-full h-full grid grid-cols-1 lg:grid-cols-3">
                  {/* Technology Description (left/first section) */}
                  <div className="p-8 flex flex-col justify-center">
                    <p className="text-gray-800 text-sm leading-relaxed">
                      MedZoom Health has developed, owns, and utilizes proprietary 
                      technology and methodologies to match virtually every individual 
                      cancer patient with the most potentially beneficial treatments 
                      and drug combinations based on individual treatment outcome.
                      Such methodologies can also be used 
                      to prioritize drugs and drug combinations of unknown clinical 
                      benefit for a range of malignancies. As a result, they are 
                      invaluable in helping pharmaceutical companies optimize their 
                      developmental compound pipelines. In addition, CAARI has a 
                      dedicated research wing for drug discovery.
                    </p>
                  </div>
                  {/* MEDZOOM + HEALTH Rectangle (center, partial width, row 3 col 2) */}
                  <div className="flex flex-col justify-center items-center px-4 py-8 h-full">
                    <div className="bg-white flex-col items-center w-3/4 p-4">
                      <div className="w-auto border-4 border-red-700 overflow-hidden">
                        <div className="bg-red-700 text-white text-2xl font-bold flex items-center justify-center py-4">
                          M E D Z O O M
                        </div>
                        <div className="bg-white text-red-700 text-2xl font-bold flex items-center justify-center py-4">
                          HEALTH
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Bottom Logo (right/last section) */}
                  <div className="p-8 flex flex-col justify-center items-center text-center">
                    <div className="text-4xl font-bold text-gray-700 mb-2">MEDZOOM</div>
                    <div className="text-m text-red-700 font-bold mt-2">HEALTH EQUITY, FOREVER.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <div className="text-2xl font-bold text-red-700 mb-4">MEDZOOM</div>
            <p className="text-gray-300">Cancer & Anti-Ageing Research Institute</p>
            <p className="text-gray-400 mt-2">www.medzoom.co.uk</p>
          </div>
        </footer>
      </main>
    </>
  )
}
