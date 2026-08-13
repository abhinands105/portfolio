import {

    DATASET_NAMES,

    type DatasetName,

} from "../data/datasets";

interface Props {

    dataset: DatasetName;

    onChange: (dataset: DatasetName) => void;

}

export default function DatasetSelector({

    dataset,

    onChange,

}: Props) {

    return (

        <div className="layer-card">

            <h2>Dataset</h2>

            <select

                value={dataset}

                onChange={(e) =>

                    onChange(

                        e.target.value as DatasetName

                    )

                }

            >

                {

                    DATASET_NAMES.map(name => (

                        <option

                            key={name}

                            value={name}

                        >

                            {name}

                        </option>

                    ))

                }

            </select>

        </div>

    );

}