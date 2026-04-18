import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset } from "./features/counter/counterSlice";
export default function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-r from-indigo-500 to-purple-600 text-white">
      <h1 className="text-4xl font-bold mb-6">Redux Counter App</h1>
      <div className="bg-white p-6 rounded-xl w-80">
        <p className="text-4xl text-black font-bold text-center mb-4">{count}</p>
        <div className="flex gap-4">
          <button
            onClick={() => dispatch(increment())}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg"
          >
            + Increment
          </button>

          <button
            onClick={() => dispatch(decrement())}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg"
          >
            - Decrement
          </button>
        </div>

        <button
          onClick={() => dispatch(reset())}
          className="mt-4 w-full bg-gray-800 text-white py-2 rounded-lg"
        >
          Reset
        </button>
      </div>
    </div>
  )
}