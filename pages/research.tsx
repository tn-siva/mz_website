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
              <Link href="/" className="text-2xl font-bold text-red-600">MEDZOOM</Link>
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-red-600 transition-colors">Home</Link>
                <Link href="/research" className="text-red-600 font-semibold">Research</Link>
                <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">Contact</a>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Research Content Grid */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            
            {/* Mission Statement */}
            <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 leading-tight">
                AT CAARI, WE UPSKILL MINDS TO THINK CRITICALLY AND ACT WITH COMPASSION
              </h2>
              <div className="w-12 h-1 bg-red-600"></div>
            </div>

            {/* Classroom Image */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/classroom_scene.jpg"
                  alt="Modern classroom with desks and blackboards"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Education & Research Section */}
            <div className="bg-red-600 p-8 rounded-lg shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-4">
                EDUCATION & RESEARCH
                <div className="w-12 h-1 bg-white mt-2"></div>
              </h3>
              <div className="space-y-4 text-sm">
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
              <div className="space-y-2 text-sm">
                <p>Dialysis machines</p>
                <p>Ventilators</p>
                <p>Oxygen Ventilators</p>
                <p>Emergency care systems</p>
              </div>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                SERVICES
                <div className="w-12 h-1 bg-white mt-2"></div>
              </h3>
              <div className="space-y-2 text-sm">
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
              <div className="space-y-2 text-sm">
                <p>Drug discovery projects</p>
                <p>Markers for diagnosis in Cancer & Anti-</p>
                <p>ageing diseases</p>
                <p>Candidate evaluation in oncology,</p>
                <p>degenerative diseases & inflammation</p>
              </div>
            </div>

            {/* Laboratory Image */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/laboratory_researchers.jpg"
                  alt="Researchers working in laboratory"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Research & Innovation */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                RESEARCH & INNOVATION
                <div className="w-12 h-1 bg-red-600 mt-2"></div>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Cutting-edge research in the field of molecular oncology specifically 
                addressing translational medicine and drug discovery at our state of art 
                research facility located in Mumbai.
              </p>
            </div>

            {/* Empty space for layout balance */}
            <div></div>
          </div>

          {/* Back to Home Link */}
          <div className="text-center mt-12">
            <Link 
              href="/"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Back to Home
            </Link>
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

