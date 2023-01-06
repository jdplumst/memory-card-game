type ScoreboardProps = {
    score: number
    bestScore: number
}

function Scoreboard(props: ScoreboardProps) {
    return (
        <div className="flex flex-col items-end bg-slate-500">
            <p className="mr-16 text-xl">Score: {props.score}</p>
            <p className="mr-16 text-xl">Best Score: {props.bestScore}</p>
        </div>
    )
}

export default Scoreboard;