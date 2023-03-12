import resumePdf from '../images/ResumeWilber.pdf';


function Resume() {
  return (
    <div class="Resume">
      <div className="body">
        <div className="Resume-body">
          <a href={resumePdf}>PDF Version</a>
          <h1>Matt Wilber</h1>

          <p>I am a generalist who’s been professionally writing software since 2016. I’ve built data pipelines, ML platforms, and web apps. I have a strong background in mathematics and machine learning, which I balance with human-centered research and design. I enjoy contributing to others’ career growth and I aim to have a positive and ethical impact on the world.</p>

          <h2>Skills</h2>
          <ul>
            <li><b>Programming languages</b>: Python, Java, Scala, R, C++, C#, Javascript</li>
            <li><b>Machine Learning/Data Science</b>: Pytorch, Jupyter, sklearn, numpy, scipy, matplotlib, ggplot, R Shiny, tidyr</li>
            <li><b>Big Data Processing</b>: Spark, Redshift, Amazon RDS, Postgres, MySQL, Elasticsearch, Airflow, Grafana</li>
            <li><b>DevOps/Infrastructure</b>: Kubernetes, Docker, AWS, Azure, Google Cloud, Jenkins, Terraform, Ansible, Packer</li>
            <li><b>App Development</b>: Flask, React, Node</li>
          </ul>
          <h2>Work Experience</h2>

          <p>
            <b>Senior Software Engineer</b>, <i>Microsoft Word</i> (2021-Present).
            <p>Owned continuous integration and lead our on-call rotation.</p>
            <ul>
              <li>Migrated Word’s CI system from Source Depot and an Office-specific pipeline orchestration system to Git and Azure DevOps</li>
              <li>Reduced pull request validation runtime from 2h30m to 1h40m, and reducing CI validation runtime from 6h to 4h</li>
              <li>Established an Office-wide community for CI owners across teams, for centralized troubleshooting, information sharing, and training</li>
              <li>I’m told the bi-weekly feedback, clear and complete documentation, and intentional project scoping I gave my rotating engineers set a new standard for how we should be setting engineers up for growth and success in Word</li> 
            </ul>
          </p>

          <p>
            <b>Applied Scientist II</b>, <i>Microsoft Bing</i> (2020-2021).
            <p>Worked on the ML side of web document indexing and retrieval.</p>
            <ul>
              <li>Established interpretability metrics to understand anisotropy in the document embedding space</li>
              <li>Reduced our Git repo size by 90% by deleting trained models in the object database</li>
            </ul>
          </p>

          <p>
            <b>Senior Machine Learning Platform Engineer</b>, <i>Roam Analytics</i> (2018-2020).
            <ul>
              <li>Built autoscaling, GPU-enabled Kubernetes cluster on Amazon EKS, using custom AMIs for healthcare-grade security</li>
              <li>Trained, deployed, and served hundreds of containerized machine learning models and workloads</li>
              <li>Generated massive healthcare knowledge graph (billions of edges!) using Airflow</li>
              <li>Built NLP-powered medical text search and annotation applications backed by a healthcare knowledge graph
                on a React/Flask/Elasticsearch stack</li>
              <li>Wrote infrastructure as code on AWS using Terraform, Ansible and Packer</li>
              <li>Implemented continuous integration and deployment pipelines on Jenkins, using tools including pylint, mypy, Docker, 
                and Ansible</li>
            </ul>
          </p> 

          <p>
            <b>Senior Data Engineer</b>, <i>Wealthfront</i> (2016-2018).
            <ul>
              <li>Wrote 30+ Spark pipelines for big data processing</li>
              <li>Sped up batch event writes to database by 2x compared to the Hibernate ORM</li>
              <li>Implemented Spark cluster autoscaling + optimized parittioning, reducing daily runtime of all batch jobs from 24+ 
                hours to ~15 hours</li>
              <li>Reduced complexity of managing and debugging our job-dependency graph by over twofold, by sorting dependency 
                graph with a topological sort and removing redundant dependencies.</li>
              <li>Built low-latency key-value store based on RocksDB</li>
              <li>Wrote automated data quality checks and real-time monitoring of compute clusters</li>
            </ul>
          </p>

          <p>
            <b>Search Quality Intern</b>, <i>Yelp</i> (Summer 2015). Improved search results for misspelled queries, by adding 
              Kneser-Ney smoothing to the language models underlying Bayesian query categorization.
          </p>

          <p>
            <b>High Frequency Trading Intern</b>, <i>Citadel</i> (Summer 2014). Developed and deployed statistical model of trade-execution
              latency in C++ and R.
          </p>

          <h2>Education</h2>

          <p>
            <b>Master of Engineering in Computer Science</b>, <i>Cornell University</i> GPA 4.0 (2020-2021).
            <ul>
              <li><b>Machine Learning</b>: Deep Probabilistic and Generative Models; Large Scale Machine Learning; Reinforcement Learning, Natural Language Processing; Computational Linguistics II</li>
              <li><b>Misc.</b>: Networks and Markets; Game Theory; Behavior and Information Technology</li>
            </ul>
          </p>
          <p>
            <b>Bachelor of Science in Mathematics</b>, <i>Harvey Mudd College</i> GPA 3.7 (2012-2016).
            <ul>
              <li><b>CS</b>: Data Structures and Program Development; Algorithms, Computational Biology</li>
              <li><b>Statistics</b>: Bayesian Statistics; Time Series; Statistical Linear Models</li>
              <li><b>Math</b>: Abstract Algebra; Partial Differential Equations; Intermediate Linear Algebra; Algebraic Geometry</li>
              <li><b>Research</b>: Computational biology, reconstructing the evolutionary tree of E. Coli with information-theoretic
                clustering optimization</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  )
};

export default Resume;
