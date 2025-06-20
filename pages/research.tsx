import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Research() {
  return (
    <>
      <Head>
        <title>Research - MedZoom CAARI</title>
        <meta name="description" content="CAARI Research & Innovation - Education, Devices, Services, and Contract Research" />
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
                <Link href="/research" className="text-red-700 font-semibold">Research</Link>
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
                  AT CAARI, WE UPSKILL MINDS TO THINK CRITICALLY AND ACT WITH COMPASSION
                </span>
                <span className="w-16 h-2 bg-red-700 mt-6 block rounded"></span>
              </h2>
              {/* Laboratory Image */}
              <div className="relative flex-1">
                <Image
                  src="/images/laboratory_researchers.jpg"
                  alt="Researchers working in laboratory"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              {/* Classroom Image */}
              <div className="relative flex-1">
                <Image
                  src="/images/classroom_scene.jpg"
                  alt="Modern classroom with desks and blackboards"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Research & Innovation */}
              <div className="relative text-center p-4 bg-gray-100 flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  RESEARCH & INNOVATION
                  <div className="w-16 h-2 bg-red-700 mt-6 block rounded"></div>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-right">
                  Cutting-edge research in the field of molecular oncology specifically
                  addressing translational medicine and drug discovery at our state of art
                  research facility located in Mumbai.
                </p>
              </div>
            </div>

            {/* Education & Research Section */}
            <div className="bg-red-700 p-8 rounded-lg shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-4">
                EDUCATION & RESEARCH
                <div className="w-12 h-1 bg-white mt-2"></div>
              </h3>
              <div className="space-y-4 text-sm text-right mr-4">
                <div>
                  <p className="font-semibold">UG & PG courses</p>
                  <p>CME programs</p>
                  <p>Certifications</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                DEVICES
                <div className="w-12 h-1 bg-white mt-2"></div>
              </h3>
              <div className="space-y-2 text-sm text-right mr-4">
                <p>Dialysis machines</p>
                <p>Ventilators</p>
                <p>Oxygen Ventilators</p>
                <p>Emergency care systems</p>
              </div>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                SERVICES
                <div className="w-12 h-1 bg-white mt-2"></div>
              </h3>
              <div className="space-y-2 text-sm text-right mr-4">
                <p>Medical Diagnostics</p>
                <p>Therapeutic</p>
                <p>Cancer Vaccines</p>
                <p>Cell Therapy</p>
                <p>Precision Medicine</p>
                <p>Validation</p>
              </div>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                CONTRACT RESEARCH
                <div className="w-12 h-1 bg-white mt-2"></div>
              </h3>
              <div className="space-y-2 text-sm text-right mr-4">
                <p>Drug discovery projects</p>
                <p>Markers for diagnosis in Cancer & Anti-</p>
                <p>ageing diseases</p>
                <p>Candidate evaluation in oncology,</p>
                <p>degenerative diseases & inflammation</p>
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

