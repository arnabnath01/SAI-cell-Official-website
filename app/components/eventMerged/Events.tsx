import Link from "next/link";
import "/styles/events.css"
const Events: React.FC = () => {
    return (
        <div className="eventPage_css">
            <div className="void" id="void">
                <div className="crop">
                    <ul id="card-list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <li>
                            <div className="card p-4 border border-gray-300 rounded-lg">
                                <Link href="">
                                    <span className="model-name text-lg font-medium">Gretel-ACTGAN</span>
                                    <span>Model for generating highly dimensional, mostly numeric, tabular data</span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="card p-4 border border-gray-300 rounded-lg">
                                <Link href="">
                                    <span className="model-name text-lg font-medium">Gretel-ACTGAN</span>
                                    <span>Model for generating highly dimensional, mostly numeric, tabular data</span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="card p-4 border border-gray-300 rounded-lg">
                                <Link href="">
                                    <span className="model-name text-lg font-medium">Gretel-ACTGAN</span>
                                    <span>Model for generating highly dimensional, mostly numeric, tabular data</span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="card p-4 border border-gray-300 rounded-lg">
                                <Link href="">
                                    <span className="model-name text-lg font-medium">Gretel-ACTGAN</span>
                                    <span>Model for generating highly dimensional, mostly numeric, tabular data</span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="card p-4 border border-gray-300 rounded-lg">
                                <Link href="">
                                    <span className="model-name text-lg font-medium">Gretel-ACTGAN</span>
                                    <span>Model for generating highly dimensional, mostly numeric, tabular data</span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="card p-4 border border-gray-300 rounded-lg">
                                <Link href="">
                                    <span className="model-name text-lg font-medium">Gretel-ACTGAN</span>
                                    <span>Model for generating highly dimensional, mostly numeric, tabular data</span>
                                </Link>
                            </div>
                        </li>
                    </ul>
                    <div className="last-circle"></div>
                    <div className="second-circle"></div>
                </div>
                <div className="mask"></div>
                <div className="center-circle"></div>
            </div>
        </div>
    );
};

export default Events;