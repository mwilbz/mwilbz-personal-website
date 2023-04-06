function Resume() {
  return (
    <div class="Resume">
      <div className="body">
        <div className="Resume-body">
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
            <p>Owned continuous integration, migrating Word to build/test on Git and Azure Devops.</p>
            <ul>
              <li>Implemented Azure Pipelines in YAML to leverage distributed, incremental builds and testing.</li>
              <li>In doing so, reduced pull request build/test by 33%, and sped up CI build/test by 33%, reducing the time from commit to release by 3 hours.</li>
              <li>This was driven by data analytics, using KQL against historical build/test data in the Kusto data store to identify opportunities for speedups.</li>
              <li>Implemented CLI that enabled operations to automatically identify “culprit” commits causing a CI batch to fail build/test, reducing average time-to-fix from 12 hours to 1 hour.</li> 
            </ul>
          </p>

          <p>
            <b>Applied Scientist II</b>, <i>Microsoft Bing</i> (2020-2021).
            <p>Trained Transformer models for web document indexing and retrieval, for both search and recommendation.</p>
            <ul>
              <li>Used SQL-like data pipeline interface to prepare and clean web-scale web document datasets for training.</li>
              <li>Established interpretability metrics to understand anisotropy in the document embedding space</li>
              <li>Reduced our Git repo size by 90% by deleting trained models in the object database</li>
            </ul>
          </p>

          <p>
            <b>Senior Machine Learning Platform Engineer</b>, <i>Roam Analytics</i> (2018-2020).
            <ul>
              <li>Built autoscaling, GPU-enabled Kubernetes cluster hosting Jupyter notebooks on Amazon EKS.</li>
              <li>Built custom AMIs for healthcare grade security.</li>
              <li>Trained, deployed, and served hundreds of Dockerized machine learning models and workloads.</li>
              <li>Generated massive healthcare knowledge graph (billions of edges) using Airflow.</li>
              <li>Built NLP-powered medical text search and annotation web applications Python/Flask/Javascript/Node/React/Elasticsearch stack.</li>
              <li>Wrote infrastructure as code on AWS using Terraform, Ansible and Packer</li>
              <li>Implemented continuous integration and deployment pipelines on Jenkins, using tools including pylint and mypy.</li>
            </ul>
          </p> 

          <p>
            <b>Senior Data Engineer</b>, <i>Wealthfront</i> (2016-2018).
            <ul>
              <li>Wrote 30+ Spark pipelines for big data processing, as well as ETL pipelines.</li>
              <li>Sped up batch event writes to MySQL database by 2x.</li>
              <li>Built analytics dashboards using Redshift, R, and Grafana.</li>
              <li>Implemented Spark cluster autoscaling + optimized partitioning, reducing daily runtime of all batch jobs from 24+ hours to 15 hours.</li>
              <li>Reduced complexity of job-dependency graph by over twofold.</li>
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
