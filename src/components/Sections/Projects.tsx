import React, { useState } from 'react';
import { projects } from '../../data/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import ProjectDetails from '../ProjectDetails';
import { Project } from '../../types/project';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../utils/Themes';
import { useTheme } from '../../context/ThemeContext';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Projects: React.FC = () => {
    const { theme } = useTheme();
    const [openModal, setOpenModal] = useState<{ state: boolean; project: Project | null }>({
        state: false,
        project: null,
    });

    return (
        <div id="projects" className="projects-section py-5">
            <h6 className="text-accent mb-2">My Portfolio</h6>
            <h2 className="display-4 fw-bold mb-5">Project <span className="text-outline">Works</span></h2>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1200: { slidesPerView: 3 }
                }}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                className="portfolio-swiper pb-5"
            >
                {projects.map((project: Project) => (
                    <SwiperSlide key={project.id}>
                        <div
                            className="project-card bg-card p-0 rounded-4 overflow-hidden h-100 d-flex flex-column"
                            style={{ border: '1px solid var(--glass-border)', cursor: 'pointer' }}
                            onClick={() => setOpenModal({ state: true, project: project })}
                        >

                            <div className="project-img-wrapper position-relative overflow-hidden" style={{ height: '240px' }}>
                                <img src={project.image} alt={project.title} className="w-100 h-100 object-fit-cover transition-transform" />
                                <div className="project-overlay d-flex align-items-center justify-content-center opacity-0 hover-opacity-100 transition-opacity bg-dark-50">
                                    <button className="btn btn-accent rounded-pill px-4">View Details</button>
                                </div>
                            </div>
                            <div className="p-4 flex-grow-1">
                                <span className="text-accent small fw-bold text-uppercase">{project.category}</span>
                                <h4 className="mt-2 mb-2 h5" style={{ color: 'var(--text-main)' }}>{project.title}</h4>
                                <p className="text-muted small mb-3">
                                    {project.description.length > 100
                                        ? `${project.description.substring(0, 100)}...`
                                        : project.description}
                                </p>

                                <div className="tags d-flex flex-wrap gap-2">
                                    {project.tags.slice(0, 3).map((tag: any) => (
                                        <span key={tag} className="badge bg-secondary-color text-muted fw-normal">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {openModal.state && (
                <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
                    <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
                </ThemeProvider>
            )}
        </div>
    );
};

export default Projects;

