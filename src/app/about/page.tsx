'use client'

import Image from 'next/image'

const teamMembers = [
  {
    name: 'Trieu Kiem',
    role: 'Team Leader',
    image: '/team1.jpg',
  },
  {
    name: 'Ha Hoang',
    role: 'Scrum Master',
    image: '/team2.jpg',
  },
  {
    name: 'Hung Doan',
    role: 'AI Magician',
    image: '/team3.jpg',
  },
  {
    name: 'Nhan Nguyen',
    role: 'AI Wizard',
    image: '/team4.jpg',
  },
  {
    name: 'An Dang',
    role: 'AI Warrior',
    image: '/team5.jpg',
  },
  {
    name: 'Quang Pham',
    role: 'AI Guardian',
    image: '/team6.jpg',
  },
]

export default function AboutPage() {
  return (
    <div className="py-12 px-4 max-w-6xl mx-auto text-slate-800 font-manrope">
      <h1 className="text-4xl font-bold text-purple-700 text-center mb-4">
        Meet the Jaguardians
      </h1>
      <p className="text-center text-lg text-slate-600 max-w-3xl mx-auto mb-12">
        We are a squad of builders, thinkers, and makers — united by one mission: harnessing AI to simplify and elevate proposal creation. JaguarGen is powered by creativity, code, and a little bit of jungle magic.
      </p>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={120}
              height={120}
              className="rounded-full object-cover mb-3"
            />
            <h3 className="text-lg font-semibold text-purple-700">{member.name}</h3>
            <p className="text-sm text-slate-500">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
