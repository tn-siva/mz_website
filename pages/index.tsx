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
              <div className="text-2xl font-bold text-red-600">MEDZOOM</div>
              <nav className="hidden md:flex space-x-8">
                <a href="#about" className="text-gray-700 hover:text-red-600 transition-colors">About</a>
                <a href="#research" className="text-gray-700 hover:text-red-600 transition-colors">Research</a>
                <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">Contact</a>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            
            {/* About Us Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                ABOUT US
                <div className="w-12 h-1 bg-red-600 mt-2"></div>
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
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  RESEARCH
                  <br />EDUCATE
                  <br />SERVE
                </h3>
              </div>
            </div>

            {/* Center Logo Section */}
            <div className="bg-red-600 p-8 rounded-lg shadow-lg text-center text-white flex flex-col justify-center">
              <div className="mb-6">
                <h1 className="text-3xl font-bold mb-2">MEDZOOM</h1>
                <div className="text-lg mb-2">Cancer & Anti-Ageing</div>
                <div className="text-lg mb-2">Research Institute</div>
                <div className="text-sm border-t border-b border-white py-2 my-4">CAARI</div>
              </div>
            </div>

            {/* Health Wealth Section */}
            <div className="relative bg-black rounded-lg shadow-lg overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src="/images/background_img_1.jpg"
                  alt="Background"
                  fill
                  className="object-cover opacity-30"
                />
              </div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-white mb-4">
                  HEALTH
                  <br />WEALTH
                </h2>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">CONTACT US</h3>
              <p className="text-gray-500 text-sm">www.medzoom.co.uk</p>
            </div>

            {/* Technology Description */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 text-sm leading-relaxed">
                MedZoom Health has developed, owns, and utilizes proprietary 
                technology and methodologies to match virtually every individual 
                cancer patient with the most potentially beneficial treatments 
                and drug combinations that are optimally suited for each patient's 
                successful treatment outcome. Such methodologies can also be used 
                to prioritize drugs and drug combinations of unknown clinical 
                benefit for a range of malignancies. As a result, they are 
                invaluable for helping pharmaceutical companies optimize their 
                developmental compound pipelines. In addition, CAARI has a 
                dedicated research wing for drug discovery.
              </p>
            </div>

            {/* Bottom Logo */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg text-center">
              <div className="text-2xl font-bold text-red-600 mb-2">MEDZOOM</div>
              <div className="text-lg font-bold text-red-600">HEALTH</div>
              <div className="text-sm text-gray-600 mt-2">HEALTH EQUITY, FOREVER.</div>
            </div>
          </div>

          {/* Second Page Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-12">
            
            {/* Aims Section */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                MEDZOOM HEALTH AIMS TO PROVIDE THERAPY GUIDANCE TAILORED PRECISELY TO THE PATIENT
                <div className="w-12 h-1 bg-red-600 mt-2"></div>
              </h2>
              
              <div className="mt-8">
                <div className="relative">
                  <Image
                    src="/images/molecular_network.jpg"
                    alt="Molecular Network Visualization"
                    width={300}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Medicine Evolution */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Current Medicine</h3>
                <p className="text-sm text-gray-600 mb-4">One Treatment Fits All</p>
                <div className="relative mb-8">
                  <Image
                    src="/images/current_future_flowchart.jpg"
                    alt="Current vs Future Medicine Flowchart"
                    width={300}
                    height={150}
                    className="rounded-lg"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Future Medicine</h3>
                <p className="text-sm text-gray-600">More Personalized Diagnostics</p>
              </div>

              <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  MISSION
                  <div className="w-12 h-1 bg-red-600 mt-2"></div>
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our main objective is to assist the clinician and the cancer 
                  patient by providing predicted therapy guidance by performing 
                  patient derived advanced 3D cell models based on live tissue 
                  sensitivity analysis at the patient specific level.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mt-4">
                  Our parallel objective is to identify and validate new drug 
                  candidate(s) to fight cancer.
                </p>
              </div>
            </div>

            {/* Vision, Activities, Faculty */}
            <div className="bg-red-600 p-8 rounded-lg shadow-lg text-white">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  VISION
                  <div className="w-12 h-1 bg-white mt-2"></div>
                </h3>
                <p className="text-sm leading-relaxed">
                  Our vision is to help humankind win the battle of cancer by 
                  using breakthrough analytical techniques to walk the 
                  patient-centric, cancer diagnostics and drug discovery path 
                  leading from drug discovery level to identify new targets and 
                  associated therapies so that the benefits of personalized 
                  cancer treatment can be extended to millions of patients who 
                  are currently unable to take advantage of it.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  ACTIVITIES
                  <div className="w-12 h-1 bg-white mt-2"></div>
                </h3>
                <ul className="text-sm space-y-1">
                  <li>Education</li>
                  <li>Research</li>
                  <li>Services</li>
                  <li>Devices</li>
                  <li>Pharma</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">
                  FACULTY
                  <div className="w-12 h-1 bg-white mt-2"></div>
                </h3>
                <ul className="text-sm space-y-1">
                  <li>Internationally qualified researchers</li>
                  <li>Experienced professionals</li>
                  <li>Sharp young talents</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <div className="text-2xl font-bold text-red-600 mb-4">MEDZOOM</div>
            <p className="text-gray-300">Cancer & Anti-Ageing Research Institute</p>
            <p className="text-gray-400 mt-2">www.medzoom.co.uk</p>
          </div>
        </footer>
      </main>
    </>
  )
}
