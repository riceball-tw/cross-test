import Card from '@/components/Card';

export default function ProjectCard({ className, project }) {
    return (
        <a className={className} href={project.url}>
            <Card>
                <img
                    width="400"
                    height="300"
                    className="mb-4 w-full rounded"
                    src={`exhibition/${project.thumbnailUrl}`}
                    alt={project.nameTC}
                    loading="lazy"
                />

                <div className="flex flex-wrap items-center justify-between border-b border-accent border-opacity-20">
                    <div className="mb-4">
                        <div className="mb-2">{project.name}</div>
                        <h3 className="text-4xl font-bold">{project.nameTC}</h3>
                    </div>

                    <div>
                        <div className="inline-block rounded-full border border-white border-opacity-30 p-2 px-4">
                            {project.category}
                        </div>
                    </div>
                </div>
                <div className="mb-8 border-b border-accent border-opacity-20">
                    <p className="py-8 text-2xl">{project.slogan}</p>
                </div>
                <div className="prose prose-invert mb-8 border-accent border-opacity-20">
                    <p>{project.description}</p>
                </div>
            </Card>
        </a>
    );
}
