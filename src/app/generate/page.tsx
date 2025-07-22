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
        domain: '',
        customDomain: '',
        clientRequest: '',
        businessModel: '',
        customBusinessModel: '',
        scale: '',
        serviceOffering: 'Fixed Price',
        coreFeatures: '',
        outcomeStatus: '',
        format: 'DOCX',
    })

    const [generateOption, setGenerateOption] = useState('generate');

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
            setStep(5)
        }, 1000)
    }

    const resetForm = () => {
        setFormData({
            title: '',
            company: '',
            domain: '',
            customDomain: '',
            clientRequest: '',
            businessModel: '',
            customBusinessModel: '',
            scale: '',
            serviceOffering: 'Fixed Price',
            coreFeatures: '',
            outcomeStatus: '',
            format: 'DOCX',
        })
        setGenerateOption('generate')
        setStep(1)
    }

    const isStepValid = (step: number) => {
        if (step === 1) {
            return formData.title && formData.company && formData.domain && (formData.domain !== 'others' || formData.customDomain)
        }
        if (step === 2) {
            return formData.clientRequest && formData.businessModel && (formData.businessModel !== 'others' || formData.customBusinessModel) && formData.scale
        }
        if (step === 3) {
            return formData.serviceOffering && formData.coreFeatures && formData.outcomeStatus && formData.format
        }
        return true
    }

    const matchingProposals = [
        { name: 'Ecom_Proposal_Q2.docx', type: 'docx' },
        { name: 'Retail_Pitch_2024.pptx', type: 'pptx' },
        { name: 'SaaS_Expansion_Plan.docx', type: 'docx' },
        { name: 'Healthcare_Proposal.pptx', type: 'pptx' },
        { name: 'Startup_Growth.docx', type: 'docx' }
    ];

    return (
        <div className="py-12 px-4 mx-auto font-manrope">
            <h1 className="text-3xl font-bold text-purple-700 mb-8 text-center">
                Craft a Winning Proposal
            </h1>

            <div className="flex justify-center mb-6 space-x-2">
                {[1, 2, 3, 4].map((s) => (
                    <div
                        key={s}
                        className={`w-4 h-4 rounded-full ${s === step ? 'bg-purple-600' : 'bg-purple-300'}`}
                    />
                ))}
            </div>

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
                                <select name="domain" value={formData.domain} onChange={handleChange} className="input">
                                    <option value="">Select Domain</option>
                                    <option value="e-commerce">E-commerce</option>
                                    <option value="saas">SaaS</option>
                                    <option value="blog">Blog</option>
                                    <option value="others">Others</option>
                                </select>
                                {formData.domain === 'others' && (
                                    <input name="customDomain" placeholder="Custom Domain" value={formData.customDomain} onChange={handleChange} className="input" />
                                )}
                            </>
                        )}

                        {step === 2 && (
                            <>
                                <textarea name="clientRequest" placeholder="Client Request" rows={3} value={formData.clientRequest} onChange={handleChange} className="input" />
                                <select name="businessModel" value={formData.businessModel} onChange={handleChange} className="input">
                                    <option value="">Select Business Model</option>
                                    <option value="subscription">Subscription</option>
                                    <option value="single-product">Single-product</option>
                                    <option value="service">Service</option>
                                    <option value="others">Others</option>
                                </select>
                                {formData.businessModel === 'others' && (
                                    <input name="customBusinessModel" placeholder="Custom Business Model" value={formData.customBusinessModel} onChange={handleChange} className="input" />
                                )}
                                <select name="scale" value={formData.scale} onChange={handleChange} className="input">
                                    <option value="">Select Scale</option>
                                    <option value="small">Small</option>
                                    <option value="medium">Medium</option>
                                    <option value="enterprise">Enterprise</option>
                                </select>
                            </>
                        )}

                        {step === 3 && (
                            <>
                                <select name="serviceOffering" value={formData.serviceOffering} onChange={handleChange} className="input">
                                    <option value="Fixed Price">Fixed Price</option>
                                    <option value="Time and Material">Time and Material</option>
                                    <option value="Managed Services">Managed Services</option>
                                </select>
                                <textarea name="coreFeatures" placeholder="Core Features" rows={3} value={formData.coreFeatures} onChange={handleChange} className="input" />
                                <select name="outcomeStatus" value={formData.outcomeStatus} onChange={handleChange} className="input">
                                    <option value="">Select Outcome Status</option>
                                    <option value="won">Won</option>
                                    <option value="won with negotiated price">Won with Negotiated Price</option>
                                    <option value="won with expanded scope">Won with Expanded Scope</option>
                                    <option value="won with reduced scope">Won with Reduced Scope</option>
                                    <option value="lost">Lost</option>
                                    <option value="lost due to budget">Lost due to Budget</option>
                                    <option value="lost due to scope">Lost due to Scope</option>
                                    <option value="lost due to timeline">Lost due to Timeline</option>
                                </select>
                                <select name="format" value={formData.format} onChange={handleChange} className="input">
                                    <option value="DOCX">DOCX</option>
                                    <option value="PPTX">PPTX</option>
                                </select>
                            </>
                        )}

                        {step === 4 && (
                            <div className="space-y-4">
                                <div className="bg-white border border-purple-200 rounded-lg p-6 shadow-md text-left space-y-4 text-slate-800 leading-relaxed text-sm sm:text-base">
                                    <p>
                                        Generating proposal for <span className="font-semibold text-purple-700">"{formData.title}"</span> by <span className="font-semibold">{formData.company}</span> in domain <span className="font-semibold">{formData.domain === 'others' ? formData.customDomain : formData.domain}</span>.
                                    </p>
                                    <p>
                                        Client Request: <em>“{formData.clientRequest}”</em> | Model: <span className="font-semibold">{formData.businessModel === 'others' ? formData.customBusinessModel : formData.businessModel}</span> | Scale: <span className="font-semibold">{formData.scale}</span>
                                    </p>
                                    <p>
                                        Offering: <span className="font-semibold">{formData.serviceOffering}</span> | Outcome: <span className="italic text-purple-600">{formData.outcomeStatus}</span>
                                    </p>
                                    <p>
                                        Features: <span className="italic">{formData.coreFeatures}</span> | Format: <span className="font-semibold">{formData.format}</span>
                                    </p>
                                </div>
                                <select value={generateOption} onChange={(e) => setGenerateOption(e.target.value)} className="input">
                                    <option value="generate">Generate New Proposal</option>
                                    <option value="match">View Matching Proposals</option>
                                </select>
                            </div>
                        )}

                        {step === 5 && generateOption === 'generate' && (
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
                                    <button onClick={resetForm} className="text-sm text-purple-600 underline hover:text-purple-800">
                                        Generate Another Proposal
                                    </button>
                                </div>
                            </div>
                        )}

                        {step === 5 && generateOption === 'match' && (
                            <div className="bg-white border border-purple-200 rounded-lg p-6 shadow-md space-y-4 text-slate-800">
                                <div className="text-xl font-semibold text-purple-700 text-center mb-4">📄 Matching Proposals</div>
                                <ul className="space-y-2">
                                    {matchingProposals.map((p, idx) => (
                                        <li key={idx} className="flex items-center justify-between border p-3 rounded-md">
                                            <div className="flex items-center gap-2">
                                                <span>{p.type === 'docx' ? '📄' : '📊'}</span>
                                                <span className="text-sm sm:text-base">{p.name}</span>
                                            </div>
                                            <button className="bg-purple-600 text-white px-4 py-1 rounded hover:bg-purple-500 text-sm">
                                                Download
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-4 text-center">
                                    <button onClick={resetForm} className="text-sm text-purple-600 underline hover:text-purple-800">
                                        Start Over
                                    </button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {step < 5 && (
                <div className="flex justify-between mt-8">
                    {step > 1 ? (
                        <button onClick={back} className="text-purple-600 hover:underline font-medium">← Back</button>
                    ) : <div />}

                    {step < 4 ? (
                        <button onClick={next} disabled={!isStepValid(step)} className={`px-6 py-2 rounded-md font-semibold transition ${isStepValid(step) ? 'bg-purple-600 text-white hover:bg-purple-500' : 'bg-purple-300 text-white cursor-not-allowed'}`}>
                            Next →
                        </button>
                    ) : (
                        <button onClick={handleSubmit} disabled={!isStepValid(step)} className={`px-6 py-2 rounded-md font-semibold transition ${isStepValid(step) ? 'bg-purple-700 text-white hover:bg-purple-600' : 'bg-purple-300 text-white cursor-not-allowed'}`}>
                            Submit
                        </button>
                    )}
                </div>
            )}
        </div>
    )
}
