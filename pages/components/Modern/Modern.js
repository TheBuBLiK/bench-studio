const Modern = () => {
    let arr = [1, 2, 3, 4, 5, 6, 7];
    return (
        <div className="project-start">
            <h2 className="project-start__title white">
                Modern technologies for innovative solutions
            </h2>
            <div className="project-start__table">
                {arr.map((a) => (
                    <div className="row">
                        <div className="project-start__item python white">
                            Python
                        </div>
                        <div className="project-start__item docker white">
                            Docker
                        </div>
                        <div className="project-start__item python white">
                            Python
                        </div>
                        <div className="project-start__item docker white">
                            Docker
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Modern;
