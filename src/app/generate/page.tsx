'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLoading } from '@/context/LoadingContext'

export default function GeneratePage() {
    const [step, setStep] = useState(1)
    const [direction, setDirection] = useState(1);
    const { setLoading } = useLoading()

    const [formData, setFormData] = useState({
        title: '',
        company: '',
        industry: '',
        description: '',
        goals: '',
        timeline: '',
        tone: 'Formal',
        language: 'English',
        format: 'DOCX',
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const next = () => {
        setDirection(1)
        setStep((prev) => Math.min(prev + 1, 5))
    }

    const back = () => {
        setDirection(-1)
        setStep((prev) => Math.max(prev - 1, 1))
    }

    const handleSubmit = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setStep(5) // Go to result screen
        }, 5000)
    }

    const resetForm = () => {
        setFormData({
            title: '',
            company: '',
            industry: '',
            description: '',
            goals: '',
            timeline: '',
            tone: 'Formal',
            language: 'English',
            format: 'DOCX',
        })
        setStep(1)
    }

    const isStepValid = (step: number) => {
        if (step === 1) {
            return formData.title && formData.company && formData.industry
        }
        if (step === 2) {
            return formData.description && formData.goals && formData.timeline
        }
        if (step === 3) {
            return formData.tone && formData.language && formData.format
        }
        return true
    }


    return (
        <div className="py-12 px-4 mx-auto font-manrope">
            <h1 className="text-3xl font-bold text-purple-700 mb-8 text-center">
                Craft a Winning Proposal
            </h1>

            {/* Step Indicator */}
            <div className="flex justify-center mb-6 space-x-2">
                {[1, 2, 3, 4].map((s) => (
                    <div
                        key={s}
                        className={`w-4 h-4 rounded-full ${s === step ? 'bg-purple-600' : 'bg-purple-300'
                            }`}
                    />
                ))}
            </div>

            {/* Step Content with Animation and CLS Fix */}
            <div className="relative min-h-[360px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={step}
                        initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 space-y-4"
                    >
                        {step === 1 && (
                            <>
                                <input name="title" placeholder="Project Title" value={formData.title} onChange={handleChange} className="input" />
                                <input name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} className="input" />
                                <input name="industry" placeholder="Industry" value={formData.industry} onChange={handleChange} className="input" />
                            </>
                        )}

                        {step === 2 && (
                            <>
                                <textarea name="description" placeholder="Project Description" rows={3} value={formData.description} onChange={handleChange} className="input" />
                                <textarea name="goals" placeholder="Project Goals" rows={2} value={formData.goals} onChange={handleChange} className="input" />
                                <input name="timeline" placeholder="Timeline (e.g. Q3 2025)" value={formData.timeline} onChange={handleChange} className="input" />
                            </>
                        )}

                        {step === 3 && (
                            <>
                                <select name="tone" value={formData.tone} onChange={handleChange} className="input">
                                    <option value="Formal">Formal</option>
                                    <option value="Friendly">Friendly</option>
                                    <option value="Persuasive">Persuasive</option>
                                </select>
                                <select name="language" value={formData.language} onChange={handleChange} className="input">
                                    <option value="English">English</option>
                                    <option value="Vietnamese">Vietnamese</option>
                                </select>
                                <select name="format" value={formData.format} onChange={handleChange} className="input">
                                    <option value="DOCX">DOCX</option>
                                    <option value="PPTX">PPTX</option>
                                </select>
                            </>
                        )}

                        {step === 4 && (
                            <div className="bg-white border border-purple-200 rounded-lg p-6 shadow-md text-left space-y-4 text-slate-800 leading-relaxed text-sm sm:text-base">
                                <p>
                                    We are going to create a proposal titled <span className="font-semibold text-purple-700">"{formData.title}"</span> for the <span className="font-semibold">{formData.industry}</span> industry on behalf of <span className="font-semibold">{formData.company}</span>.
                                </p>
                                <p>
                                    The core of this proposal is: <em>“{formData.description}”</em> — with a focus on <span className="font-semibold">{formData.goals}</span>.
                                </p>
                                <p>
                                    Our goal is to deliver it by <span className="font-semibold">{formData.timeline}</span>, written in <span className="font-semibold">{formData.language}</span> with a <span className="italic text-purple-600">{formData.tone.toLowerCase()}</span> tone. The final document will be exported as a <span className="font-semibold">{formData.format}</span> file.
                                </p>
                                <p className="text-xs text-slate-500 italic">
                                    If everything looks good, hit "Submit" to start the generation.
                                </p>
                            </div>


                        )}

                        {step === 5 && (
                            <div className="bg-white border border-purple-200 rounded-lg p-6 shadow-md space-y-6 text-center text-slate-800">
                                <div className="text-2xl font-semibold text-purple-700">
                                    🎉 Proposal Ready!
                                </div>
                                <p>
                                    Your proposal file <strong className="text-purple-600">Jaguar_Proposal_2025.docx</strong> has been generated.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                                    <button className="bg-purple-600 text-white px-6 py-2 rounded-md font-medium hover:bg-purple-500">
                                        Download
                                    </button>
                                    <button className="bg-white border border-purple-300 text-purple-700 px-6 py-2 rounded-md font-medium hover:bg-purple-100">
                                        Live Preview
                                    </button>
                                </div>

                                <div className="pt-6">
                                    <button
                                        onClick={resetForm}
                                        className="text-sm text-purple-600 underline hover:text-purple-800"
                                    >
                                        Generate Another Proposal
                                    </button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            {
                step < 5 ? (
                    <div className="flex justify-between mt-8">
                        {step > 1 ? (
                            <button onClick={back} className="text-purple-600 hover:underline font-medium">← Back</button>
                        ) : <div />}

                        {step < 4 ? (
                            <button
                                onClick={next}
                                disabled={!isStepValid(step)}
                                className={`px-6 py-2 rounded-md font-semibold transition ${isStepValid(step)
                                    ? 'bg-purple-600 text-white hover:bg-purple-500'
                                    : 'bg-purple-300 text-white cursor-not-allowed'
                                    }`}
                            >
                                Next →
                            </button>
                        ) : (
                            <button
                                onClick={handleSubmit}
                                disabled={!isStepValid(step)}
                                className={`px-6 py-2 rounded-md font-semibold transition ${isStepValid(step)
                                    ? 'bg-purple-700 text-white hover:bg-purple-600'
                                    : 'bg-purple-300 text-white cursor-not-allowed'
                                    }`}
                            >
                                Submit
                            </button>
                        )}

                    </div>
                ) : ''
            }
            
        </div>
    )
}
