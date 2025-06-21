import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function WhatDrivesUs() {
  return (
    <>
      <Head>
        <title>What Drives MedZoom</title>
        <meta name="description" content="MedZoom Purpose - Vision, Mission, Activities and Faculty" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold text-red-700">MEDZOOM</Link>
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-red-700 transition-colors">Home</Link>
                <Link href="/research" className="text-gray-700 hover:text-red-700 transition-colors">Research</Link>
                <Link href="/what-drives-us" className="text-red-700 font-semibold">What Drives Us</Link>
                <a href="#contact" className="text-gray-700 hover:text-red-700 transition-colors">Contact</a>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Research Content Grid */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto items-stretch">

            <div className="bg-gray-200 rounded-lg shadow-lg flex flex-col">
              {/* Mission Statement */}
              <h2 className="text-4xl lg:text-4xl font-extrabold text-gray-800 m-6 mb-4 leading-tight flex-1 flex flex-col items-start justify-center">
                <span>
                    MEDZOOM HEALTH AIMS TO PROVIDE THERAPY GUIDANCE TAILORED PRECISELY TO THE PATIENT
                </span>
                <span className="w-16 h-2 bg-red-700 mt-6 block rounded"></span>
              </h2>
              {/* Executive touching molecular network */}
              <div className="relative flex-1">
                <Image
                  src="/images/molecular_network.jpg"
                  alt="An executive touching a molecular network"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              {/* Current vs Future medicine chart */}
              <div className="relative flex-1">
                <Image
                  src="/images/current_future_flowchart.jpg"
                  alt="Infographic showing current vs future medicine"
                  fill
                  className="object-cover min-h-[300px] max-h-[400px]"
                />
              </div>
              {/* Mission */}
              <div className="relative text-center p-4 bg-gray-100 flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  RESEARCH & INNOVATION
                  <div className="w-16 h-2 bg-red-700 mt-6 block rounded"></div>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-right">
                  Our main objective is to assist the clinician and the cancer patient by providing predictive
                  therapy guidance based on patient specific 3D cell models built using ex vivo chemosensitivity assays.
                  Our parallel objective is to identify and validate new drug candidate(s) to fight cancer.
                </p>
              </div>
            </div>

            {/* Vision, Activities, Faculty section */}
            <div className="bg-red-700 p-8 rounded-lg shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-4">
                VISION
                <div className="w-12 h-1 bg-white mt-2"></div>
              </h3>
              <div className="space-y-4 text-sm text-right mr-4">
                <div>
                  <p>Our vision is to help humankind win the battle against cancer by using state-of-the-art technologies
                    in patient-centric cancer diagnostics and therapeutics. And in the drug discovery spcae, to identify
                    new targets and associated therapies to extend the benefits of personalized treatments to millions of
                    patients unable to access them now.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                ACTIVITIES
                <div className="w-12 h-1 bg-white mt-2"></div>
              </h3>
              <div className="space-y-2 text-sm text-right mr-4">
                <p>Education</p>
                <p>Research</p>
                <p>Devices</p>
                <p>Pharma</p>
                <p>AI Consulting</p>
              </div>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                FACULTY
                <div className="w-12 h-1 bg-white mt-2"></div>
              </h3>
              <div className="space-y-2 text-sm text-right mr-4">
                <p>Internationally qualified researchers</p>
                <p>Experienced professionals</p>
                <p>Shar young minds</p>
              </div>
            </div>

            {/* Empty space for layout balance */}
            <div></div>
          </div>

          {/* Back to Home Link */}
          <div className="text-center mt-12">
            <Link
              href="/"
              className="inline-block bg-red-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Back to Home
            </Link>
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