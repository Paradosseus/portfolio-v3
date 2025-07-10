import Section from "./section";
import Card from "./ui/card";
import { projectsData } from "../_data/portfolioData";
import Chip from "./ui/chip";
import Button from "./ui/button";
const MyProjectsSection = () => {
    return (
        <Section>
            <div className="flex flex-col gap-16">
                <h2 className="heading-2">My Projects</h2>
                <div className="grid grid-cols-2 gap-6">
                    {projectsData.map((project, index) => {
                        return (
                            <Card>
                                <div className="flex flex-col gap-6 justify-end h-[560px] p-8">
                                    <h3 className="heading-4">{project.title}</h3>
                                    <div className="flex flex-row gap-4">
                                        {project.categories.map((category, index) => {
                                            return (
                                                <Chip key={index}>{category}</Chip>
                                            )
                                        })}
                                    </div>
                                </div>
                            </Card>
                        )
                    })}
                </div>
                <div className="flex justify-center">
                    <Button variant="primary">View More Projects</Button>
                </div>
            </div>
        </Section>
    )
}

export default MyProjectsSection;