setTimeout(() => {
    const container = document.querySelector("div.Header_container__2QlV9");
    if (container) {
        const firstDiv = container.querySelector("div");
        if (firstDiv) {
            const content = `
              <a href="/ECM/analyticsConfig/list" target="_blank"><u>📊 Analytics</u></a>&nbsp;&nbsp;
              <a href="/ECM/securitysystems/list#tab_2-2" target="_blank"><u>🔒 Endpoints</u></a>&nbsp;&nbsp;
              <a href="/ECM/ecmConfig/externalconfig" target="_blank"><u>🔌 Connections</u></a>&nbsp;&nbsp;
              <a href="/ECM/flatViewJobcontrol/flatViewJobList?job_group=&job_name=WSRetryJob" target="_blank"><u>🔄 WSRETRY</u></a>&nbsp;&nbsp;
              <a href="/ECM/flatViewJobcontrol/flatViewJobList" target="_blank"><u>📂 JCP</u></a>&nbsp;&nbsp;
              <a href="/ECM/workflowmanagement/pendingtasklist" target="_blank"><u>⏳ Pending Tasks</u></a>&nbsp;&nbsp;
              <a href="/ECM/dataAnalyzer/index" target="_blank"><u>📊 Data Analyzer</u></a>&nbsp;&nbsp;
              <a href="/ECM/ecmConfig/generalConfigNew" target="_blank"><u>⚙️ Global Config</u></a>&nbsp;&nbsp;
              <a href="/ECM/users/list" target="_blank"><u>👥 Users</u></a>&nbsp;&nbsp;
              <a href="/admin/adminHome/manageLogs" target="_blank"><u>📜 Logs</u></a>
          `;
            firstDiv.insertAdjacentHTML("afterbegin", content);
        }
    }
}, 3000);
