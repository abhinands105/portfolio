export default function HowToUseCard() {
    return (
        <div className="how-to-card">
            <div className="how-to-title">
                How to Use
            </div>

            <div className="how-to-steps">
                <div>
                    <span>01</span>
                    <p><strong>Build</strong> — Add layers or neurons.</p>
                </div>

                <div>
                    <span>02</span>
                    <p><strong>Forward</strong> — Run inputs through the network.</p>
                </div>

                <div>
                    <span>03</span>
                    <p><strong>Train</strong> — Let the network learn from data.</p>
                </div>

                <div>
                    <span>04</span>
                    <p><strong>Watch</strong> — Track loss and predictions.</p>
                </div>
            </div>

            <div className="how-to-xor">
                <strong>XOR</strong>
                <span>00 → 0</span>
                <span>01 → 1</span>
                <span>10 → 1</span>
                <span>11 → 0</span>
            </div>
        </div>
    );
}