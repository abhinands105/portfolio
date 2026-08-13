interface Props {

  learningRate: number;

  epochs: number;

  onLearningRateChange: (value: number) => void;

  onEpochChange: (value: number) => void;

  onTrain: () => void;

}

export default function Controls({

  learningRate,

  epochs,

  onLearningRateChange,

  onEpochChange,

  onTrain,

}: Props) {

  return (

    <div className="layer-card">

      <h2>Training Controls</h2>

      <label>

        Learning Rate

      </label>

      <input

        type="range"

        min="0.01"

        max="1"

        step="0.01"

        value={learningRate}

        onChange={e =>

          onLearningRateChange(

            Number(e.target.value)

          )

        }

      />

      <p>

        {learningRate.toFixed(2)}

      </p>

      <label>

        Epochs

      </label>

      <input

        type="range"

        min="1"

        max="1000"

        value={epochs}

        onChange={e =>

          onEpochChange(

            Number(e.target.value)

          )

        }

      />

      <p>

        {epochs}

      </p>

      <button

        className="primary-btn"

        onClick={onTrain}

      >

        ▶ Train Network

      </button>

    </div>

  );

}