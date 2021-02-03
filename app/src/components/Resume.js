function Resume() {
  return (
    <div class="Resume">
      <div className="body">
        <div className="Resume-body">
          <h1>Matt Wilber</h1>
          <h2>Skills</h2>
          <ul>
            <li><b>Programming languages</b>: Python, Java, Scala, R</li>
            <li><b>Machine Learning/Data Science</b>: Pytorch, Jupyter, sklearn, numpy, scipy, matplotlib, ggplot, R Shiny, tidyr</li>
            <li><b>Big Data Processing</b>: Spark, Redshift, Amazon RDS, Postgres, MySQL, Elasticsearch, Airflow, Grafana</li>
            <li><b>DevOps/Infrastructure</b>: Kubernetes, Docker, AWS, Jenkins, Terraform, Ansible, Packer</li>
            <li><b>App Development</b>: Flask, React, NodeJS</li>
          </ul>
          <h2>Work Experience</h2>

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
              latency.
          </p>

          <h2>Education</h2>

          <p>
            <b>Master of Engineering in Computer Science</b>, <i>Cornell University</i> (2020-2021).
            <ul>
              <li><b>NLP</b>: Natural Language Processing; Computational Linguistics II; Advanced Language Technologies; NLP and Machine Learning</li>
              <li><b>Other ML</b>: Introduction to Computer Vision; Reinforcement Learning</li>
              <li><b>Misc.</b>: Behavior and Information Technology; Game Theory</li>
              <li><b>Research</b>: Abstractive Document Summarization</li>
            </ul>
          </p>
          <p>
            <b>Bachelor of Science in Mathematics</b>, <i>Harvey Mudd College</i> (2012-2016).
            <ul>
              <li><b>CS</b>: Intro to CS; Principles of Computer Science; Data Structures and Program Development; Algorithms,
                Computational Biology</li>
              <li><b>Statistics</b>: Intro to Statistics; Bayesian Statistics; Time Series; Statistical Linear Models</li>
              <li><b>Math</b>: Abstract Algebra; Partial Differential Equations; Intermediate Linear Algebra; Algebraic Geometry;
                Vector Calculus</li>
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
