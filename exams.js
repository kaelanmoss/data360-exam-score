const EXAMS = {
  "data-360-consultant": {
    id: "data-360-consultant",
    name: "Data 360 Consultant",
    shortName: "Data 360 Consultant",
    questionCount: 60,
    durationMinutes: 105,
    passingScore: 70,
    examGuideUrl:
      "https://help.salesforce.com/s/articleView?id=005298940&type=1",
    sections: {
      "Solution Positioning": 14,
      "Data 360 Setup and Administration": 13,
      "Data Source Connection and Ingestion": 18,
      "Harmonization and Unification": 17,
      "Data Enhancements, Sharing, and Analysis": 18,
      "Data Activations and Utilization": 20,
    },
    sampleScores: {
      "Solution Positioning": 78,
      "Data 360 Setup and Administration": 65,
      "Data Source Connection and Ingestion": 82,
      "Harmonization and Unification": 58,
      "Data Enhancements, Sharing, and Analysis": 71,
      "Data Activations and Utilization": 74,
    },
    studyResources: {
      "Solution Positioning": [
        {
          label: "Data 360 Overview",
          url: "https://help.salesforce.com/s/articleView?id=data.c360_a_data_cloud.htm&type=5",
          source: "Help",
        },
        {
          label: "Product Considerations",
          url: "https://help.salesforce.com/s/articleView?id=data.c360_a_product_considerations.htm&type=5",
          source: "Help",
        },
        {
          label: "Architecture Strategy",
          url: "https://help.salesforce.com/s/articleView?id=data.c360_a_data_cloud_architecture_strategy.htm&type=5",
          source: "Help",
        },
        {
          label: "Prepare for the Data 360 Consultant Exam",
          url: "https://trailhead.salesforce.com/content/learn/trails/prepare-for-your-salesforce-data-360-consultant-exam",
          source: "Trailhead",
        },
      ],
      "Data 360 Setup and Administration": [
        {
          label: "Set Up and Provision Data 360",
          url: "https://help.salesforce.com/s/articleView?id=data.c360_a_setup_provision.htm&type=5",
          source: "Help",
        },
        {
          label: "User Permissions",
          url: "https://help.salesforce.com/s/articleView?id=data.c360_a_userpermissions.htm&type=5",
          source: "Help",
        },
        {
          label: "Sandbox Considerations",
          url: "https://help.salesforce.com/s/articleView?id=data.c360_a_data_cloud_sandbox_consideration.htm&type=5",
          source: "Help",
        },
        {
          label: "Deploy and Validate Data 360 Configurations",
          url: "https://trailhead.salesforce.com/content/learn/modules/data-360-sandboxes/deploy-and-validate-your-data-360-configurations",
          source: "Trailhead",
        },
      ],
      "Data Source Connection and Ingestion": [
        {
          label: "Data Streams",
          url: "https://help.salesforce.com/s/articleView?id=data.c360_a_data_streams.htm&type=5",
          source: "Help",
        },
        {
          label: "Connection Tasks",
          url: "https://help.salesforce.com/s/articleView?id=sf.c360_a_connection_tasks.htm&type=5",
          source: "Help",
        },
        {
          label: "Connect and Ingest Data",
          url: "https://trailhead.salesforce.com/content/learn/modules/data-cloud-connect-and-unify",
          source: "Trailhead",
        },
        {
          label: "Explore Setup to Activation Trail",
          url: "https://trailhead.salesforce.com/content/learn/trails/data-cloud-explore-setup-to-activation",
          source: "Trailhead",
        },
      ],
      "Harmonization and Unification": [
        {
          label: "Identity Resolution",
          url: "https://help.salesforce.com/s/articleView?id=data.c360_a_identity_resolution.htm&type=5",
          source: "Help",
        },
        {
          label: "Unified and Link Objects",
          url: "https://help.salesforce.com/s/articleView?id=data.c360_a_identity_resolution_data_modeling_unified_and_link_objects.htm&type=5",
          source: "Help",
        },
        {
          label: "Map and Unify Data",
          url: "https://trailhead.salesforce.com/content/learn/modules/data-cloud-connect-and-unify/map-and-unify-data",
          source: "Trailhead",
        },
        {
          label: "Configure Identity Resolution Rules",
          url: "https://trailhead.salesforce.com/content/learn/modules/data-and-identity-in-salesforce-cdp/configure-identity-resolution-rules",
          source: "Trailhead",
        },
      ],
      "Data Enhancements, Sharing, and Analysis": [
        {
          label: "Data Governance Capabilities",
          url: "https://help.salesforce.com/s/articleView?id=data.c360_a_data_gov_capabilities.htm&type=5",
          source: "Help",
        },
        {
          label: "Data Shares",
          url: "https://help.salesforce.com/s/articleView?id=data.c360_a_data_shares.htm&type=5",
          source: "Help",
        },
        {
          label: "Calculated Insights in Segments",
          url: "https://help.salesforce.com/s/articleView?id=data.c360_a_calculated_insights_in_segments.htm&type=5",
          source: "Help",
        },
        {
          label: "Create a Calculated Insight",
          url: "https://trailhead.salesforce.com/content/learn/projects/explore-data-cloud-core-functionality/create-an-insight",
          source: "Trailhead",
        },
      ],
      "Data Activations and Utilization": [
        {
          label: "Segments",
          url: "https://help.salesforce.com/s/articleView?id=data.c360_a_segments.htm&type=5",
          source: "Help",
        },
        {
          label: "Activation for a Segment",
          url: "https://help.salesforce.com/s/articleView?id=data.c360_a_activation_for_a_segment.htm&type=5",
          source: "Help",
        },
        {
          label: "Data Actions",
          url: "https://help.salesforce.com/s/articleView?id=data.c360_a_data_actions_cdp.htm&type=5",
          source: "Help",
        },
        {
          label: "Customer 360 Audiences Segmentation",
          url: "https://trailhead.salesforce.com/content/learn/modules/customer-360-audiences-segmentation",
          source: "Trailhead",
        },
      ],
    },
  },
  "marketing-cloud-email-specialist": {
    id: "marketing-cloud-email-specialist",
    name: "Marketing Cloud Email Specialist",
    shortName: "MC Email Specialist",
    questionCount: 60,
    durationMinutes: 90,
    passingScore: 67,
    examGuideUrl:
      "https://help.salesforce.com/s/articleView?id=005298950&type=1",
    sections: {
      "Email Marketing Best Practices": 10,
      "Content Creation and Delivery": 24,
      "Marketing Automation": 26,
      "Subscriber and Data Management": 26,
      "Insights and Analytics": 14,
    },
    sampleScores: {
      "Email Marketing Best Practices": 72,
      "Content Creation and Delivery": 55,
      "Marketing Automation": 68,
      "Subscriber and Data Management": 61,
      "Insights and Analytics": 88,
    },
    studyResources: {
      "Email Marketing Best Practices": [
        {
          label: "Email Deliverability Best Practices",
          url: "https://help.salesforce.com/s/articleView?id=mktg.mc_es_email_deliverability_best_practices.htm&type=5",
          source: "Help",
        },
        {
          label: "International Sends Best Practices",
          url: "https://help.salesforce.com/s/articleView?id=mktg.mc_es_international_sends_best_practices.htm&type=5",
          source: "Help",
        },
        {
          label: "Email Studio Get Started Checklist",
          url: "https://help.salesforce.com/s/articleView?id=mktg.mc_es_get_started_checklist_for_email_studio.htm&type=5",
          source: "Help",
        },
        {
          label: "Prepare for MC Email Specialist",
          url: "https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-marketing-cloud-email-specialist-credential",
          source: "Trailhead",
        },
      ],
      "Content Creation and Delivery": [
        {
          label: "Email Creation Best Practices",
          url: "https://help.salesforce.com/s/articleView?id=mktg.mc_ceb_email_creation_best_practices_and_tips.htm&type=5",
          source: "Help",
        },
        {
          label: "Content Builder Editor Tips",
          url: "https://help.salesforce.com/s/articleView?id=mktg.mc_ceb_editor_tips.htm&type=5",
          source: "Help",
        },
        {
          label: "Build Emails with Content Builder",
          url: "https://trailhead.salesforce.com/content/learn/modules/email-creation-and-sending/build-emails-with-content-builder",
          source: "Trailhead",
        },
        {
          label: "Create and Send Targeted Emails Trail",
          url: "https://trailhead.salesforce.com/content/learn/trails/create-and-send-targeted-emails-with-email-studio",
          source: "Trailhead",
        },
      ],
      "Marketing Automation": [
        {
          label: "Journeys and Automations",
          url: "https://help.salesforce.com/s/articleView?id=mktg.mc_journeys_and_automations.htm&type=5",
          source: "Help",
        },
        {
          label: "Automation Studio",
          url: "https://help.salesforce.com/s/articleView?id=mktg.mc_as_automation_studio.htm&type=5",
          source: "Help",
        },
        {
          label: "Get Started with Journey Builder",
          url: "https://trailhead.salesforce.com/content/learn/modules/journey-builder-basics/get-started-with-journey-builder",
          source: "Trailhead",
        },
        {
          label: "Automation Studio Activities",
          url: "https://trailhead.salesforce.com/content/learn/modules/automation-studio-activities",
          source: "Trailhead",
        },
      ],
      "Subscriber and Data Management": [
        {
          label: "Contact Builder Best Practices",
          url: "https://help.salesforce.com/s/articleView?id=mktg.mc_cab_contact_builder_best_practices.htm&type=5",
          source: "Help",
        },
        {
          label: "Send Logging Best Practices",
          url: "https://help.salesforce.com/s/articleView?id=mktg.mc_es_send_logging_best_practices.htm&type=5",
          source: "Help",
        },
        {
          label: "Learn About Data Extensions",
          url: "https://trailhead.salesforce.com/content/learn/modules/marketing-cloud-contact-management/learn-about-data-extensions",
          source: "Trailhead",
        },
        {
          label: "Collect Data with a Send Log",
          url: "https://trailhead.salesforce.com/content/learn/modules/marketing-cloud-data-management/collect-data-with-a-send-log",
          source: "Trailhead",
        },
      ],
      "Insights and Analytics": [
        {
          label: "Tracking Overview",
          url: "https://help.salesforce.com/s/articleView?id=mktg.mc_es_tracking_overview.htm&type=5",
          source: "Help",
        },
        {
          label: "Measure Journey Campaign Performance",
          url: "https://trailhead.salesforce.com/content/learn/modules/journey-campaign-analytics-and-optimization/measure-journey-campaign-performance",
          source: "Trailhead",
        },
        {
          label: "Test and Send Emails",
          url: "https://trailhead.salesforce.com/content/learn/modules/email-creation-and-sending/test-and-send-emails",
          source: "Trailhead",
        },
        {
          label: "MC Email Specialist Credential",
          url: "https://trailhead.salesforce.com/en/credentials/marketingcloudemailspecialist",
          source: "Trailhead",
        },
      ],
    },
  },
};