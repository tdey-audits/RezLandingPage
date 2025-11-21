function Manifesto() {
  return (
    <section className="section page-section">
      <div className="section-container">
        <h2 className="section-title">Manifesto</h2>
        <div style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          padding: '3rem',
          borderRadius: '1rem',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          textAlign: 'left',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <p className="section-text" style={{ marginBottom: '1.5rem', maxWidth: '100%' }}>
            Massive chunks of data are being emitted by blockchains every second. And AI needs extensive datasets to be trained. This opens up an obvious opportunity to use blockchain as the data layer for DeFi. The amalgamation of DeFi and AI is termed as DeFAI—Intelligent DeFi. That is what we are building at rezLabs.
          </p>

          <p className="section-text" style={{ marginBottom: '1.5rem', maxWidth: '100%' }}>
            With the increasing popularity and utility of Perpetuals and Prediction markets in DeFi, there’s an obvious trend that it’s only going to increase and get even more popular. But for a retail investor, the barrier to entry is high. It isn't just difficult to study complex market parameters; the entire experience is plagued by fragmented UX, requiring users to navigate disjointed interfaces and clunky processes.
          </p>

          <p className="section-text" style={{ marginBottom: '1.5rem', maxWidth: '100%' }}>
            This can be solved using AI agents. While many current products in the market are merely NLP-based interfaces, we are innovating to build an AI-aided, fully automated, non-custodial platform.
          </p>

          <p className="section-text" style={{ marginBottom: '1.5rem', maxWidth: '100%' }}>
            Our AI agents are intelligent companions that place trades for you on the DEX. You simply deposit funds, choose your risk, stop/loss, and other simple parameters, and then let the agent do the heavy lifting. You don’t have to think, study, or fight with bad UX—the agent knows what it needs to do based on our tailor-made algorithms and places the trades for you. Your portfolio grows while you sleep.
          </p>

          <p className="section-text" style={{ margin: 0, maxWidth: '100%' }}>
            Rez Labs would serve as the main R&D body and launch several products under it. That’s why we call it “Labs”. Our target is not just to implement agentic trading, but also to expand our scope to solve user friction and build products in the DeFAI space. Decentralized finance and AI are much newer tech which demands the need for continuous and steady research. We at Rez Labs understand the importance of R&D to develop bespoke products which sustain the ever-changing market of DeFi.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Manifesto;
