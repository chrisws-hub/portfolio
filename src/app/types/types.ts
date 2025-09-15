/*
 * Copyright 2025 Praveen Kumar
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ReactElement } from 'react';

// 🚀 Technology Type: Detailed Information for Each Tech Skill
export interface Technology {
  /** Name of the technology/skill */
  name: string;

  /** Hex color code representing the technology */
  color: string;

  /** Path or URL to the technology's icon */
  icon: string;
}

// 🧩 Skill Category: Organized Grouping of Technologies
export interface Skill {
  /** Category name for skills (e.g., 'Frontend', 'Backend') */
  category: string;

  /** Collection of technologies within this category */
  technologies: Technology[];
}

// 💻 Project Showcase: Comprehensive Project Details
export interface Project {
  /** Unique identifier for the project */
  id: number;

  /** Project title */
  title: string;

  /** Short description of the project */
  description: string;

  /** Technologies and skills used in the project */
  tags: string[];

  /** Link to the project's GitHub repository */
  githubLink: string;

  /** Type of project (Web, Mobile, Desktop, etc.) */
  type: string;

  /** Optional live demo or deployment link */
  liveLink?: string;

  /** Project thumbnail or cover image */
  thumbnail: string;

  /** Optional GIF that plays on hover */
  gifUrl?: string;

  /** Optional array of images for carousel */
  carouselImages?: string[];

  /** Carousel configuration */
  carouselConfig?: {
    /** Interval between slides in ms (default: 3000) */
    interval?: number;
    /** Whether to loop the carousel (default: true) */
    infinite?: boolean;
  };
}
