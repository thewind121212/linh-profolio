import { useInitLoadingStore } from "../../store/loading"


export default function Devsvg() {

    const isDone = useInitLoadingStore(state => state.isDone)

    return (
        <svg
            viewBox="0 0 214.6 75.71"
            xmlns="http://www.w3.org/2000/svg"
            className={isDone ? 'active': ''}
        >
            <g
                id="svgGroup"
                strokeLinecap="round"
                fillRule="evenodd"
                fontSize="9pt"
                stroke="#FBF0BA"
                strokeWidth="0.25mm"
                fill="#FBF0BA"
                style={{
                    stroke: "#FBF0BA",
                    strokeWidth: "0.25mm",
                    fill: "#FBF0BA",
                }}
            >
                <path
                    d="M 0 75.705 L 33.4 75.705 A 63.704 63.704 0 0 0 51.325 73.355 C 67.867 68.496 77.4 56.244 77.4 37.905 C 77.4 12.605 60.3 0.005 33.4 0.005 L 0 0.005 L 0 0.705 C 7.7 1.705 8.8 3.605 8.8 13.405 L 8.8 62.305 C 8.8 71.405 7.7 74.005 0 75.005 L 0 75.705 Z M 20 73.905 L 20 1.805 L 32.4 1.805 A 36.116 36.116 0 0 1 49.58 5.691 C 58.585 10.514 64.384 19.908 65.201 34.317 A 63.452 63.452 0 0 1 65.3 37.905 A 48.229 48.229 0 0 1 63.309 52.207 C 58.88 66.487 47.405 73.905 32.4 73.905 L 20 73.905 Z"
                    id="5"
                    className="svg-elem-1"
                    strokeWidth="0.35px"
                />
                <path
                    d="M 84.5 75.705 L 140.9 75.705 L 140.9 64.705 C 134.802 68.059 129.634 70.632 124.466 72.152 A 36.907 36.907 0 0 1 114.3 73.705 L 104.5 73.805 L 104.5 36.905 L 109.1 36.905 A 136.82 136.82 0 0 1 112.038 36.941 C 117.773 37.067 126.211 37.501 132.6 38.005 L 132.6 34.005 A 967.616 967.616 0 0 1 130.067 34.168 C 122.809 34.627 113.921 35.105 109.1 35.105 L 104.5 35.105 L 104.5 1.905 L 111.1 1.905 A 29.951 29.951 0 0 1 113.404 1.993 C 118.863 2.414 124.321 4.333 132.55 7.75 A 700.527 700.527 0 0 1 137.9 10.005 L 137.9 0.005 L 84.5 0.005 L 84.5 0.705 C 92.2 1.705 93.3 3.605 93.3 13.405 L 93.3 62.305 C 93.3 71.405 92.2 74.005 84.5 75.005 L 84.5 75.705 Z"
                    id="6"
                    className="svg-elem-2"
                    strokeWidth="0.35px"
                />
                <path
                    d="M 151.1 12.405 L 174.7 75.705 L 183.1 75.705 A 33.639 33.639 0 0 1 182.998 74.806 C 182.818 72.958 182.933 71.733 183.8 69.305 L 204.7 12.405 C 207.692 4.272 209.372 1.819 213.664 0.881 A 16.827 16.827 0 0 1 214.6 0.705 L 214.6 0.005 L 196.6 0.005 L 196.6 0.705 A 25.891 25.891 0 0 1 199.219 1.109 C 203.766 2.092 204.734 4.325 202.818 10.388 A 48.399 48.399 0 0 1 202.2 12.205 L 182.5 66.405 L 164 12.105 C 161.5 4.505 161.8 1.505 170.5 0.705 L 170.5 0.005 L 141.4 0.005 L 141.4 0.705 C 146.5 1.805 148 4.105 151.1 12.405 Z"
                    id="7"
                    className="svg-elem-3"
                    strokeWidth="0.35px"
                />
            </g>
        </svg>
    )
}