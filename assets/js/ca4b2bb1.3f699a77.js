"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[4371],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,g=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(g,s(s({ref:t},u),{},{components:a})):n.createElement(g,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},768:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:2,sidebar_label:"CloudNativePG PostgreSQL"},s="Deploying PostgreSQL Database on EKS using CloudNativePG Operator",l={unversionedId:"distributed-databases/cloudnative-postgres",id:"distributed-databases/cloudnative-postgres",title:"Deploying PostgreSQL Database on EKS using CloudNativePG Operator",description:"Introduction",source:"@site/docs/distributed-databases/cloudnative-postgres.md",sourceDirName:"distributed-databases",slug:"/distributed-databases/cloudnative-postgres",permalink:"/data-on-eks/docs/distributed-databases/cloudnative-postgres",draft:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/distributed-databases/cloudnative-postgres.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"CloudNativePG PostgreSQL"},sidebar:"docs",previous:{title:"Introduction",permalink:"/data-on-eks/docs/distributed-databases/"},next:{title:"Troubleshooting",permalink:"/data-on-eks/docs/troubleshooting"}},i={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Deploying the Solution",id:"deploying-the-solution",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Deploy the EKS Cluster with CloudNativePG Operator",id:"deploy-the-eks-cluster-with-cloudnativepg-operator",level:3},{value:"Verify Deployment",id:"verify-deployment",level:3},{value:"Deploy a PostgreSQL cluster",id:"deploy-a-postgresql-cluster",level:3},{value:"Storage",id:"storage",level:4},{value:"Monitoring",id:"monitoring",level:3},{value:"Import database sample",id:"import-database-sample",level:3},{value:"Create Backup to S3",id:"create-backup-to-s3",level:3},{value:"Restore",id:"restore",level:3},{value:"Conclusion",id:"conclusion",level:2}],u={toc:p};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploying-postgresql-database-on-eks-using-cloudnativepg-operator"},"Deploying PostgreSQL Database on EKS using CloudNativePG Operator"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CloudNativePG")," is an open source\n",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/operator/"},"operator"),"\ndesigned to manage ",(0,r.kt)("a",{parentName:"p",href:"https://www.postgresql.org/"},"PostgreSQL")," workloads ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io"},"Kubernetes"),"."),(0,r.kt)("p",null,"It defines a new Kubernetes resource called ",(0,r.kt)("inlineCode",{parentName:"p"},"Cluster")," representing a PostgreSQL\ncluster made up of a single primary and an optional number of replicas that co-exist\nin a chosen Kubernetes namespace for High Availability and offloading of\nread-only queries."),(0,r.kt)("p",null,"Applications that reside in the same Kubernetes cluster can access the\nPostgreSQL database using a service which is solely managed by the operator,\nwithout having to worry about changes of the primary role following a failover\nor a switchover. Applications that reside outside the Kubernetes cluster, need\nto configure a Service or Ingress object to expose the Postgres via TCP.\nWeb applications can take advantage of the native connection pooler based on PgBouncer."),(0,r.kt)("p",null,"CloudNativePG was originally built by ",(0,r.kt)("a",{parentName:"p",href:"https://www.enterprisedb.com"},"EDB"),", then\nreleased open source under Apache License 2.0 and submitted for CNCF Sandbox in April 2022.\nThe ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cloudnative-pg/cloudnative-pg"},"source code repository is in Github"),"."),(0,r.kt)("p",null,"More details about the project will be found on this ",(0,r.kt)("a",{parentName:"p",href:"https://cloudnative-pg.io"},"link")),(0,r.kt)("h2",{id:"deploying-the-solution"},"Deploying the Solution"),(0,r.kt)("p",null,"Let's go through the deployment steps"),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Ensure that you have installed the following tools on your machine."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html"},"aws cli")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://Kubernetes.io/docs/tasks/tools/"},"kubectl")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://learn.hashicorp.com/tutorials/terraform/install-cli"},"terraform")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://formulae.brew.sh/formula/libpq"},"psql"))),(0,r.kt)("h3",{id:"deploy-the-eks-cluster-with-cloudnativepg-operator"},"Deploy the EKS Cluster with CloudNativePG Operator"),(0,r.kt)("p",null,"First, clone the repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/awslabs/data-on-eks.git\n")),(0,r.kt)("p",null,"Navigate into cloudnative-postgres folder and run ",(0,r.kt)("inlineCode",{parentName:"p"},"install.sh")," script. By default the script deploys EKS cluster to ",(0,r.kt)("inlineCode",{parentName:"p"},"us-west-2")," region. Update ",(0,r.kt)("inlineCode",{parentName:"p"},"variables.tf")," to change the region. This is also the time to update any other input variables or make any other changes to the terraform template."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd data-on-eks/distributed-databases/cloudnative-postgres\n\n./install .sh\n")),(0,r.kt)("h3",{id:"verify-deployment"},"Verify Deployment"),(0,r.kt)("p",null,"Verify the Amazon EKS Cluster"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"aws eks describe-cluster --name cnpg-on-eks\n")),(0,r.kt)("p",null,"Update local kubeconfig so we can access kubernetes cluster"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"aws eks update-kubeconfig --name cnpg-on-eks --region us-west-2 \n")),(0,r.kt)("p",null,"First, lets verify that we have worker nodes running in the cluster."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get nodes\nNAME                                        STATUS   ROLES    AGE     VERSION\nip-10-1-10-192.us-west-2.compute.internal   Ready    <none>   4d17h   v1.25.6-eks-48e63af\nip-10-1-10-249.us-west-2.compute.internal   Ready    <none>   4d17h   v1.25.6-eks-48e63af\nip-10-1-11-38.us-west-2.compute.internal    Ready    <none>   4d17h   v1.25.6-eks-48e63af\nip-10-1-12-195.us-west-2.compute.internal   Ready    <none>   4d17h   v1.25.6-eks-48e63af\n")),(0,r.kt)("p",null,"Next, lets verify all the pods are running."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods --namespace=monitoring\nNAME                                                        READY   STATUS    RESTARTS        AGE\nalertmanager-kube-prometheus-stack-alertmanager-0           2/2     Running   1 (4d17h ago)   4d17h\nkube-prometheus-stack-grafana-7f8b9dc64b-sb27n              3/3     Running   0               4d17h\nkube-prometheus-stack-kube-state-metrics-5979d9d98c-r9fxn   1/1     Running   0               60m\nkube-prometheus-stack-operator-554b6f9965-zqszr             1/1     Running   0               60m\nprometheus-kube-prometheus-stack-prometheus-0               2/2     Running   0               4d17h\n\nkubectl get pods --namespace=cnpg-system\nNAME                                          READY   STATUS    RESTARTS   AGE\ncnpg-on-eks-cloudnative-pg-587d5d8fc5-65z9j   1/1     Running   0          4d17h\n")),(0,r.kt)("h3",{id:"deploy-a-postgresql-cluster"},"Deploy a PostgreSQL cluster"),(0,r.kt)("p",null,"First of all, we need to create a storageclass using the ",(0,r.kt)("inlineCode",{parentName:"p"},"ebs-csi-driver"),", a demo namespace and kubernetes secrets for login/password for database authentication. Check examples folder for all kubernetes manifests."),(0,r.kt)("h4",{id:"storage"},"Storage"),(0,r.kt)("p",null,"For running a highly scalable and durable self-managed PostgreSQL database on Kubernetes with Amazon EKS and EC2, it is recommended to use Amazon Elastic Block Store (EBS) volumes that provide high performance and fault tolerance. The preferred EBS volume types for this use case are:"),(0,r.kt)("p",null,"1.Provisioned IOPS SSD (io2 or io1):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Designed for I/O-intensive workloads such as databases."),(0,r.kt)("li",{parentName:"ul"},"Offers consistent and low-latency performance."),(0,r.kt)("li",{parentName:"ul"},"Allows you to provision a specific number of IOPS (input/output operations per second) according to your requirements."),(0,r.kt)("li",{parentName:"ul"},"Provides up to 64,000 IOPS per volume and 1,000 MB/s throughput, making it suitable for demanding database workloads.")),(0,r.kt)("p",null,"2.General Purpose SSD (gp3 or gp2):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Suitable for most workloads and offers a balance between performance and cost."),(0,r.kt)("li",{parentName:"ul"},"Provides a baseline performance of 3,000 IOPS and 125 MB/s throughput per volume, which can be increased if needed (up to 16,000 IOPS and 1,000 MB/s for gp3)."),(0,r.kt)("li",{parentName:"ul"},"Recommended for less I/O-intensive database workloads or when cost is a primary concern.")),(0,r.kt)("p",null,"You can find both storageclass template in ",(0,r.kt)("inlineCode",{parentName:"p"},"examples")," folder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create -f examples/storageclass.yaml\n\nkubectl create -f examples/auth-prod.yaml\n")),(0,r.kt)("p",null,"As with any other deployment in Kubernetes, to deploy a PostgreSQL cluster you need to apply a configuration file that defines your desired ",(0,r.kt)("inlineCode",{parentName:"p"},"Cluster"),". CloudNativePG operator offers two type of Bootstrapping a new database:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Bootstrap an empty cluster"),(0,r.kt)("li",{parentName:"ol"},"Bootstrap From another cluster.")),(0,r.kt)("p",null,"In this first example, we are going to create a new empty database cluster using ",(0,r.kt)("inlineCode",{parentName:"p"},"initdb"),"flags. We are going to use the template below by modifying the IAM role for IRSA configuration ",(0,r.kt)("em",{parentName:"p"},"1")," and S3 bucket for backup restore process and WAL archiving ",(0,r.kt)("em",{parentName:"p"},"2"),". The Terraform could already created this use ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform output")," to extract these parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cd data-on-eks/distributed-databases/cloudnative-postgres\n\nterraform output\n\nbarman_backup_irsa = "arn:aws:iam::<your_account_id>:role/cnpg-on-eks-prod-irsa"\nbarman_s3_bucket = "XXXX-cnpg-barman-bucket"\nconfigure_kubectl = "aws eks --region us-west-2 update-kubeconfig --name cnpg-on-eks"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'---\napiVersion: postgresql.cnpg.io/v1\nkind: Cluster\nmetadata:\n  name: prod\n  namespace: demo\nspec:\n  description: "Cluster Demo for DoEKS"\n  # Choose your PostGres Database Version\n  imageName: ghcr.io/cloudnative-pg/postgresql:15.2\n  # Number of Replicas\n  instances: 3\n  startDelay: 300\n  stopDelay: 300\n  replicationSlots:\n    highAvailability:\n      enabled: true\n    updateInterval: 300\n  primaryUpdateStrategy: unsupervised\n  serviceAccountTemplate:\n    # For backup and restore, we use IRSA for barman tool. \n    # You will find this IAM role on terraform outputs. \n    metadata:\n      annotations:\n        eks.amazonaws.com/role-arn: arn:aws:iam::<<account_id>>:role/cnpg-on-eks-prod-irsa #1\n  postgresql:\n    parameters:\n      shared_buffers: 256MB\n      pg_stat_statements.max: \'10000\'\n      pg_stat_statements.track: all\n      auto_explain.log_min_duration: \'10s\'\n    pg_hba:\n      # - hostssl app all all cert\n      - host app app all password\n  logLevel: debug\n  storage:\n    storageClass: ebs-sc\n    size: 1Gi\n  walStorage:\n    storageClass: ebs-sc\n    size: 1Gi\n  monitoring:\n    enablePodMonitor: true\n  bootstrap:\n    initdb: # Deploying a new cluster\n      database: WorldDB\n      owner: app\n      secret:\n        name: app-auth\n  backup:\n    barmanObjectStore:\n    # For backup, we S3 bucket to store data. \n    # On this Blueprint, we create an S3 check the terraform output for it.\n      destinationPath: s3://<your-s3-barman-bucket> #2\n      s3Credentials:\n        inheritFromIAMRole: true\n      wal:\n        compression: gzip\n        maxParallel: 8\n    retentionPolicy: "30d"\n\n  resources: # m5large: m5xlarge 2vCPU, 8GI RAM\n    requests:\n      memory: "512Mi"\n      cpu: "1"\n    limits:\n      memory: "1Gi"\n      cpu: "2"\n\n  affinity:\n    enablePodAntiAffinity: true\n    topologyKey: failure-domain.beta.kubernetes.io/zone\n\n  nodeMaintenanceWindow:\n    inProgress: false\n    reusePVC: false\n\n\n')),(0,r.kt)("p",null,"Once updated, you can apply your template."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create -f examples/prod-cluster.yaml\n\n")),(0,r.kt)("p",null,"Verify that CloudNatvicePG operator has created three pods: one primary and two standby."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\nkubectl get pods,svc -n demo\nNAME         READY   STATUS    RESTARTS   AGE\npod/prod-1   1/1     Running   0          4m36s\npod/prod-2   1/1     Running   0          3m45s\npod/prod-3   1/1     Running   0          3m9s\n\nNAME               TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE\nservice/prod-any   ClusterIP   172.20.230.153   <none>        5432/TCP   4m54s\nservice/prod-r     ClusterIP   172.20.33.61     <none>        5432/TCP   4m54s\nservice/prod-ro    ClusterIP   172.20.96.16     <none>        5432/TCP   4m53s\nservice/prod-rw    ClusterIP   172.20.236.1     <none>        5432/TCP   4m53s\n")),(0,r.kt)("p",null,"The operator created also three services:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"-rw"),": points only to the primary instances of cluster database"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"-ro"),"points only to hot standby replicas for read-only-workloads"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"-r"),"points to any of the instances for read-only workloads")),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"-any")," points on all the instances."),(0,r.kt)("p",null,"Another way to check Cluster status is by using ",(0,r.kt)("a",{parentName:"p",href:"https://cloudnative-pg.io/documentation/1.19/cnpg-plugin/#cloudnativepg-plugin"},"cloudnative-pg kubectl plugin")," offered by the CloudNativePG community,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl cnpg status prod\n\nCluster Summary\nName:               prod\nNamespace:          demo\nSystem ID:          7214866198623563798\nPostgreSQL Image:   ghcr.io/cloudnative-pg/postgresql:15.2\nPrimary instance:   prod-1\nStatus:             Cluster in healthy state\nInstances:          3\nReady instances:    3\nCurrent Write LSN:  0/6000000 (Timeline: 1 - WAL File: 000000010000000000000005)\n\nCertificates Status\nCertificate Name  Expiration Date                Days Left Until Expiration\n----------------  ---------------                --------------------------\nprod-ca           2023-06-24 14:40:27 +0000 UTC  89.96\nprod-replication  2023-06-24 14:40:27 +0000 UTC  89.96\nprod-server       2023-06-24 14:40:27 +0000 UTC  89.96\n\nContinuous Backup status\nFirst Point of Recoverability:  Not Available\nWorking WAL archiving:          OK\nWALs waiting to be archived:    0\nLast Archived WAL:              000000010000000000000005   @   2023-03-26T14:52:09.24307Z\nLast Failed WAL:                -\n\nStreaming Replication status\nReplication Slots Enabled\nName    Sent LSN   Write LSN  Flush LSN  Replay LSN  Write Lag  Flush Lag  Replay Lag  State      Sync State  Sync Priority  Replication Slot\n----    --------   ---------  ---------  ----------  ---------  ---------  ----------  -----      ----------  -------------  ----------------\nprod-2  0/6000000  0/6000000  0/6000000  0/6000000   00:00:00   00:00:00   00:00:00    streaming  async       0              active\nprod-3  0/6000000  0/6000000  0/6000000  0/6000000   00:00:00   00:00:00   00:00:00    streaming  async       0              active\n\nUnmanaged Replication Slot Status\nNo unmanaged replication slots found\n\nInstances status\nName    Database Size  Current LSN  Replication role  Status  QoS         Manager Version  Node\n----    -------------  -----------  ----------------  ------  ---         ---------------  ----\nprod-1  29 MB          0/6000000    Primary           OK      BestEffort  1.19.0           ip-10-1-10-192.us-west-2.compute.internal\nprod-2  29 MB          0/6000000    Standby (async)   OK      BestEffort  1.19.0           ip-10-1-12-195.us-west-2.compute.internal\nprod-3  29 MB          0/6000000    Standby (async)   OK      BestEffort  1.19.0           ip-10-1-11-38.us-west-2.compute.internal\n")),(0,r.kt)("h3",{id:"monitoring"},"Monitoring"),(0,r.kt)("p",null,"In this example, we deployed a Prometheus and Grafana addons to monitor all database clusters created by CloudNativePG. Let's check Grafana dashboard."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n monitoring port-forward svc/kube-prometheus-stack-grafana 8080:80\n\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CloudNativePG Grafana Dashboard",src:a(6808).Z,width:"3554",height:"1666"})),(0,r.kt)("h3",{id:"import-database-sample"},"Import database sample"),(0,r.kt)("p",null,"You can expose your database outside the cluster using ingress-controller or kubernetes service type ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalancer"),". However, for internal usage inside your EKS cluster, you can use kubernetes service ",(0,r.kt)("inlineCode",{parentName:"p"},"prod-rw")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"prod-ro"),".\nIn this section, we are going to expose read-write service ",(0,r.kt)("inlineCode",{parentName:"p"},"-rw"),"using ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl port-forward"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\nkubectl port-forward svc/prod-rw 5432:5432 -n demo\n\n")),(0,r.kt)("p",null,"Now, we use ",(0,r.kt)("inlineCode",{parentName:"p"},"psql")," cli to import ",(0,r.kt)("inlineCode",{parentName:"p"},"world.sql")," into our database instance WorldDB using credentials from ",(0,r.kt)("inlineCode",{parentName:"p"},"app-auth")," secrets."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\npsql -h localhost --port 5432 -U app -d WorldDB < world.sql\n\n# Quick check on db tables.\n\npsql -h localhost --port 5432 -U app -d WorldDB -c '\\dt'\nPassword for user app:\n            List of relations\n Schema |      Name       | Type  | Owner\n--------+-----------------+-------+-------\n public | city            | table | app\n public | country         | table | app\n public | countrylanguage | table | app\n(3 rows)\n")),(0,r.kt)("h3",{id:"create-backup-to-s3"},"Create Backup to S3"),(0,r.kt)("p",null,"Now that we had a running database with data, CloudNativePG operator offers backup-restore feature using ",(0,r.kt)("a",{parentName:"p",href:"https://pgbarman.org/"},"barman")," tool. CloudNativePG allows database admin to create on-demand database or Scheduled backups and for more details on ",(0,r.kt)("a",{parentName:"p",href:"https://cloudnative-pg.io/documentation/1.19/backup_recovery/"},"documentations"),"."),(0,r.kt)("p",null,"In this example, we will create a Backup object to start a backup process immediately."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: postgresql.cnpg.io/v1\nkind: Backup\nmetadata:\n  name: ondemand\nspec:\n  cluster:\n    name: prod\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," kubectl create -f examples/backup-od.yaml\n")),(0,r.kt)("p",null,"It will take couple minutes to run, then, check the backup process"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl describe backup ondemand\n\nEvents:\n  Type    Reason     Age   From                   Message\n  ----    ------     ----  ----                   -------\n  Normal  Starting   60s   cloudnative-pg-backup  Starting backup for cluster prod\n  Normal  Starting   60s   instance-manager       Backup started\n  Normal  Completed  56s   instance-manager       Backup completed\n")),(0,r.kt)("h3",{id:"restore"},"Restore"),(0,r.kt)("p",null,"For restore, we use bootstrap a new cluster using backup file on S3. The backup tool ",(0,r.kt)("em",{parentName:"p"},"barman")," manages restore process, but, it doesn't support backup and restore for kubernetes secrets. This must be managed separately, like using csi-secrets-driver with AWS SecretsManager."),(0,r.kt)("p",null,"First let's delete prod database."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete cluster prod -n demo\n\n")),(0,r.kt)("p",null,"Then, update your template ",(0,r.kt)("inlineCode",{parentName:"p"},"examples/cluster-restore.yaml")," with your S3 bucket and IAM role. Note that on restore template, CloudNativePG use ",(0,r.kt)("inlineCode",{parentName:"p"},"externalClusters")," to point on the database."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"  kubectl create -f examples/cluster-restore.yaml\n\n  Type    Reason                       Age    From            Message\n  ----    ------                       ----   ----            -------\n  Normal  CreatingPodDisruptionBudget  7m12s  cloudnative-pg  Creating PodDisruptionBudget prod-primary\n  Normal  CreatingPodDisruptionBudget  7m12s  cloudnative-pg  Creating PodDisruptionBudget prod\n  Normal  CreatingServiceAccount       7m12s  cloudnative-pg  Creating ServiceAccount\n  Normal  CreatingRole                 7m12s  cloudnative-pg  Creating Cluster Role\n  Normal  CreatingInstance             7m12s  cloudnative-pg  Primary instance (from backup)\n  Normal  CreatingInstance             6m33s  cloudnative-pg  Creating instance prod-2\n  Normal  CreatingInstance             5m51s  cloudnative-pg  Creating instance prod-3\n")),(0,r.kt)("p",null,"When creating a new cluster, the operator will create a ServiceAccount with IRSA configuration as described on Cluster resources. Make sure the trust policy points the right ServiceAccount."),(0,r.kt)("p",null,"Let's check if the data were covered as expected."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\npsql -h localhost --port 5432 -U app -d WorldDB -c '\\dt'\nPassword for user app:\n            List of relations\n Schema |      Name       | Type  | Owner\n--------+-----------------+-------+-------\n public | city            | table | app\n public | country         | table | app\n public | countrylanguage | table | app\n(3 rows)\n\npsql -h localhost --port 5432 -U app -d WorldDB -c 'SELECT CURRENT_TIME;'\n\n")),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"CloudNativePG operator provides Level 5 from ",(0,r.kt)("a",{parentName:"p",href:"https://operatorframework.io/operator-capabilities/"},"Operator Capability Levels"),". In this example, we share a blueprint that deploy the operator as an addon along with its monitoring stack (Prometheus and grafana). Among many features, we highlighted couple of examples on creating cluster, importing data and restoring database in case of disaster (or cluster deletion). More features are available on this ",(0,r.kt)("a",{parentName:"p",href:"https://cloudnative-pg.io/documentation/1.19/"},"documentation")))}c.isMDXComponent=!0},6808:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cnpg_garfana_dashboard-3e1324abcad72e5b4b056a6b3042ccb1.png"}}]);