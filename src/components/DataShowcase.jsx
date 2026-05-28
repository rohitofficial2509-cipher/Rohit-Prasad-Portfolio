// components/DataShowcase.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlay, FiServer, FiDatabase, FiFileText, FiPieChart, FiCheck, FiRefreshCw } from "react-icons/fi";

const PIPELINE_STEPS = [
  {
    id: "source",
    title: "Data Source",
    desc: "Raw Operational Data (CSV/Excel)",
    icon: FiFileText,
    color: "from-cyan-400 to-blue-500",
    glow: "shadow-cyan-500/20",
  },
  {
    id: "etl",
    title: "ETL Processor",
    desc: "Google Apps Script Ingestion",
    icon: FiRefreshCw,
    color: "from-indigo-400 to-purple-500",
    glow: "shadow-indigo-500/20",
  },
  {
    id: "db",
    title: "PostgreSQL DB",
    desc: "Clean & Structured Storage",
    icon: FiDatabase,
    color: "from-purple-400 to-pink-500",
    glow: "shadow-purple-500/20",
  },
  {
    id: "dashboard",
    title: "Analytics Dashboard",
    desc: "Interactive BI & Reports",
    icon: FiPieChart,
    color: "from-pink-400 to-rose-500",
    glow: "shadow-pink-500/20",
  },
];

export default function DataShowcase() {
  const [pipelineState, setPipelineState] = useState("idle"); // idle, source, etl, db, dashboard, completed
  const [stats, setStats] = useState({
    recordsIngested: 0,
    dataIntegrity: 0,
    processingTime: 0,
  });

  const runPipeline = async () => {
    if (pipelineState !== "idle" && pipelineState !== "completed") return;

    // Reset stats
    setStats({ recordsIngested: 0, dataIntegrity: 0, processingTime: 0 });

    // Step 1: Source
    setPipelineState("source");
    await sleep(1500);

    // Step 2: ETL
    setPipelineState("etl");
    setStats(prev => ({ ...prev, recordsIngested: 450, processingTime: 0.8 }));
    await sleep(1800);

    // Step 3: DB
    setPipelineState("db");
    setStats(prev => ({ ...prev, recordsIngested: 1280, dataIntegrity: 98, processingTime: 1.4 }));
    await sleep(1500);

    // Step 4: Dashboard
    setPipelineState("dashboard");
    setStats(prev => ({ ...prev, recordsIngested: 1280, dataIntegrity: 100, processingTime: 2.1 }));
    await sleep(1200);

    // Done
    setPipelineState("completed");
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  return (
    <section id="data-pipeline" className="py-16 sm:py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold tracking-wider text-indigo-400 uppercase">Interactive Demo</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 mt-2 tracking-tight">
            ⚙️ Interactive Data Pipeline Showcase
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Simulate a real-time data ingestion and processing workflow to see how raw data gets validated, clean-stored, and displayed.
          </p>
        </motion.div>

        {/* Pipeline Container */}
        <div className="card-modern p-8 bg-slate-900/30 border border-slate-800/80 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
          
          {/* Top Control Panel */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10 pb-6 border-b border-slate-800/50">
            <div>
              <h3 className="text-lg font-bold text-slate-100">ETL Pipeline Status</h3>
              <p className="text-sm text-slate-400">
                Current State:{" "}
                <span className="font-semibold text-indigo-400 capitalize">
                  {pipelineState === "idle" ? "Ready" : pipelineState}
                </span>
              </p>
            </div>
            
            <button
              onClick={runPipeline}
              disabled={pipelineState !== "idle" && pipelineState !== "completed"}
              className={`flex items-center gap-2 px-6 py-3 font-semibold rounded-full border transition-all duration-300 ${
                pipelineState !== "idle" && pipelineState !== "completed"
                  ? "bg-slate-800 border-slate-700 text-slate-500 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-500 border-indigo-500/30 text-white shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/35 cursor-pointer"
              }`}
            >
              {pipelineState !== "idle" && pipelineState !== "completed" ? (
                <FiRefreshCw className="animate-spin text-lg" />
              ) : (
                <FiPlay className="text-lg" />
              )}
              {pipelineState === "completed" ? "Rerun Ingestion" : "Run Ingestion Pipeline"}
            </button>
          </div>

          {/* Interactive Visual Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {PIPELINE_STEPS.map((step, idx) => {
              const StepIcon = step.icon;
              const isActive = pipelineState === step.id;
              const isPast = 
                pipelineState === "completed" || 
                (step.id === "source" && ["etl", "db", "dashboard"].includes(pipelineState)) ||
                (step.id === "etl" && ["db", "dashboard"].includes(pipelineState)) ||
                (step.id === "db" && ["dashboard"].includes(pipelineState));

              return (
                <div key={step.id} className="relative flex flex-col items-center">
                  
                  {/* Step Card */}
                  <motion.div
                    className={`w-full p-5 rounded-2xl border transition-all duration-500 flex flex-col items-center text-center relative z-10 ${
                      isActive
                        ? `bg-slate-900 border-indigo-500/50 shadow-lg ${step.glow}`
                        : isPast
                        ? "bg-slate-950/60 border-emerald-500/30"
                        : "bg-slate-950/40 border-slate-900"
                    }`}
                    whileHover={{ y: -2 }}
                  >
                    {/* Status Badge */}
                    <div className="absolute top-3 right-3">
                      {isPast ? (
                        <div className="w-5 h-5 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center text-xs border border-emerald-500/30">
                          <FiCheck size={12} />
                        </div>
                      ) : isActive ? (
                        <div className="w-5 h-5 bg-indigo-500/20 text-indigo-400 rounded-full flex items-center justify-center text-xs border border-indigo-500/30">
                          <FiRefreshCw size={12} className="animate-spin" />
                        </div>
                      ) : null}
                    </div>

                    {/* Icon Container */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${step.color} p-[1px] mb-4`}>
                      <div className="w-full h-full bg-slate-950 rounded-[15px] flex items-center justify-center text-slate-100">
                        <StepIcon size={24} className={isActive ? "animate-pulse" : ""} />
                      </div>
                    </div>

                    <h4 className="font-bold text-slate-100 text-base">{step.title}</h4>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">{step.desc}</p>
                  </motion.div>

                  {/* Connecting Line (Desktop) */}
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-12 -right-4 w-8 h-[2px] bg-slate-800 z-0">
                      {isPast && (
                        <motion.div
                          className="h-full bg-gradient-to-r from-emerald-500 to-indigo-500"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 0.5 }}
                        />
                      )}
                      {isActive && (
                        <motion.div
                          className="h-full bg-indigo-500"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ repeat: Infinity, duration: 1 }}
                        />
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Real-time Dashboard Panel */}
          <AnimatePresence>
            {(pipelineState !== "idle") && (
              <motion.div
                className="mt-10 p-6 bg-slate-950/80 border border-slate-900 rounded-2xl"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.4 }}
              >
                <h4 className="text-sm font-bold tracking-wider text-slate-400 uppercase mb-4">Pipeline Execution Metrics</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Metric 1 */}
                  <div className="flex flex-col justify-between p-4 bg-slate-900/40 rounded-xl border border-slate-800/40">
                    <span className="text-xs text-slate-500 font-semibold uppercase">Records Ingested</span>
                    <span className="text-3xl font-black text-slate-100 mt-2 tracking-tight">
                      {stats.recordsIngested}
                    </span>
                    <div className="w-full bg-slate-800 h-[3px] rounded-full mt-3 overflow-hidden">
                      <motion.div
                        className="bg-indigo-500 h-full rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${(stats.recordsIngested / 1280) * 100}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div className="flex flex-col justify-between p-4 bg-slate-900/40 rounded-xl border border-slate-800/40">
                    <span className="text-xs text-slate-500 font-semibold uppercase">Data Quality Integrity</span>
                    <span className="text-3xl font-black text-emerald-400 mt-2 tracking-tight">
                      {stats.dataIntegrity}%
                    </span>
                    <div className="w-full bg-slate-800 h-[3px] rounded-full mt-3 overflow-hidden">
                      <motion.div
                        className="bg-emerald-500 h-full rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${stats.dataIntegrity}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>

                  {/* Metric 3 */}
                  <div className="flex flex-col justify-between p-4 bg-slate-900/40 rounded-xl border border-slate-800/40">
                    <span className="text-xs text-slate-500 font-semibold uppercase">ETL Latency</span>
                    <span className="text-3xl font-black text-cyan-400 mt-2 tracking-tight">
                      {stats.processingTime}s
                    </span>
                    <div className="w-full bg-slate-800 h-[3px] rounded-full mt-3 overflow-hidden">
                      <motion.div
                        className="bg-cyan-500 h-full rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${(stats.processingTime / 2.1) * 100}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>

                </div>

                {/* Dashboard Chart Mock */}
                {pipelineState === "completed" && (
                  <motion.div
                    className="mt-6 pt-6 border-t border-slate-900/60"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h5 className="text-xs font-bold text-slate-400 uppercase mb-3">Live Database Aggregations</h5>
                    <div className="flex items-end gap-3 h-32 pt-4 px-4 bg-slate-900/20 rounded-xl border border-slate-900/40">
                      {[65, 40, 85, 55, 95, 75, 100].map((height, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-2">
                          <div className="w-full bg-slate-800 rounded-t-md h-24 relative overflow-hidden flex items-end">
                            <motion.div
                              className="w-full bg-gradient-to-t from-indigo-600 to-cyan-400 rounded-t-md"
                              initial={{ height: 0 }}
                              animate={{ height: `${height}%` }}
                              transition={{ duration: 0.8, delay: i * 0.08 }}
                            />
                          </div>
                          <span className="text-[9px] text-slate-500 font-semibold uppercase">M0{i+1}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
