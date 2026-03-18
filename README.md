# SMART on FHIR Patient Health Dashboard <br> 病患健康數據整合應用儀表板 [🔗](https://raychen21311.github.io/SMARTonFHIR_Patient_Dashboard/)

本專案致力於透過 HL7 FHIR 國際標準與 SMART on FHIR App 框架，打造以病患為中心的醫療數據整合方案。藉由跨院區的資料交換與直觀的視覺化監測，解決臨床數據破碎化的痛點。作為開源專案，我們歡迎開發者與醫療機構自由使用、修改並共同擴展功能。

## 📋 專案概述

本應用程式旨在解決醫療資訊破碎化的問題，讓醫療人員或病患能透過單一介面，快速瀏覽儲存於 FHIR Server 上的完整歷程。系統不僅提供生理數據趨勢，更進一步整合了照護計畫與醫療資源利用情況。

### 核心功能
* **數據趨勢總覽 (Overview)**：自動抓取 `Observation` 資源，針對血壓、BMI、體溫、心跳、疼痛評分等指標進行長期趨勢繪圖。
* **醫療事件時間軸 (Timeline)**：整合 `Encounter`、`Condition`、`Procedure` 與 `DiagnosticReport`，以視覺化時間軸呈現病患完整的就醫脈絡。
* **檢驗與報告追蹤 (Labs & Reports)**：支援檢驗結果與參考範圍（Reference Range）對照，並提供報告內容的快速檢閱。
* **智慧照護計畫 (CarePlan)**：清晰展示醫囑與照護目標，提升病患服從性與醫病溝通效率。
* **資源利用分析 (Utilization)**：整合 `Claim`、`ExplanationOfBenefit` (EOB) 與 `Immunization`，協助追蹤醫療資源使用與疫苗接種狀況。

## 🛠 技術架構

* **標準規範**：HL7 FHIR R4
* **認證協議**：SMART App Launch (OAuth2 + PKCE)
* **前端架構**：Vanilla JavaScript, HTML5, CSS3 (採用模組化頁面設計)
* **數據視覺化**：Chart.js + Luxon (時間序列分析)
* **FHIR 整合庫**：`fhirclient.js`

## 📂 檔案結構說明

- `index.html`: 應用程式入口，執行 SMART Launch 授權引導。
- `patient-select.html`: 病患選擇介面，支援數據豐富度判別（Data Richness）。
- `overview.html`: 生理指標趨勢儀表板。
- `timeline.html`: 臨床事件時間軸。
- `labs.html`: 檢驗數據與診斷報告分析。
- `careplan.html`: 照護計畫追蹤。
- `utilization.html`: 醫療利用率與保險/疫苗資訊。

## 📖 使用者操作指南

如果您是評審或測試者，請參考以下步驟快速體驗：

1.  **啟動應用**：點擊連結 [🔗](https://raychen21311.github.io/SMARTonFHIR_Patient_Dashboard/)。
2.  **模擬授權**：系統預設介接模擬沙盒，您只需依畫面提示點擊確認，即可模擬真實診間的 SMART Launch 登入流程。
3.  **挑選病患**：選擇病患，以觀看視覺化圖表與數據分布。
4.  **切換分頁**：透過上方導覽列瀏覽 **Overview (趨勢)**、**Timeline (歷程)**、**Labs (檢驗)**、**CarePlan (照護)** 及 **Utilization (就診頻率/保險/疫苗)** 五大核心模組。

---

## 🚀 給開發者

1.  **Client ID**：
    目前預設介接模擬沙盒環境，為使方便使用者快速體驗 SMART on FHIR 的數據呈現能力，已簡化授權登入流程。
    ```javascript
    FHIR.oauth2.authorize({
        clientId: "YOUR_CLIENT_ID",
        scope: "openid fhirUser patient/*.read",
        redirectUri: "patient-select.html",
        iss: "[https://thas.mohw.gov.tw/v/r4/sim/](https://thas.mohw.gov.tw/v/r4/sim/)..." // 測試伺服器網址
    });
    ```
2.  **部署**：
    本專案為主要為前端應用，可部署於任何支援 HTTPS 的靜態網頁伺服器，歡迎醫療院所及開發者參考使用或依需求為基礎進行改寫與擴充。
3.  **運行**：
    存取 `index.html` 完成 OIDC 流程後，即可開始瀏覽病患數據。

## 🔐 安全性與隱私

- 符合 SMART on FHIR 安全標準，不儲存任何病患機敏個資於伺服器端。
- 採用 **PKCE** (Proof Key for Code Exchange) 強化授權安全。
- 遵循最小權限原則，僅讀取經授權之 `patient/*.read` 資源。

## ✨ 特點標註

- **互操作性**：相容於臺灣 FHIR 實作指引 (TW Core IG) 精神，經測試已能接軌沙盒 FHIR Server。
- **使用者體驗**：專為臨床情境設計，將複雜的 JSON 數據轉化為易讀的圖表與時間軸，並歡迎使用者給予回饋意見。
- **擴展性**：模組化設計方便未來加入 AI 預測模型或更多 TW Core 資源。

---
<sub style="color: gray;">*本專案係為技術展示用途，相關臨床診斷請以醫療機構正式報告為準。*</sub><br>
<sub style="color: gray;">*本應用程式所顯示之所有健康數據、檢驗報告及趨勢圖表，僅供一般參考與個人健康管理輔助之用，不構成專業醫療建議、診斷或治療方案。*</sub><br>
<sub style="color: gray;">*數據之準確性與及時性受限於來源端 FHIR Server 之品質，開發團隊不對原始數據的錯誤、遺漏或傳輸過程中的遺失承擔法律責任。*</sub><br>
<sub style="color: gray;">*本介面僅對原始醫療數據進行彙整與視覺化呈現，系統本身不具備任何自動診斷或建議功能，請勿將其用於替代醫師之臨床判斷。*</sub><br>
<sub style="color: gray;">*使用者應妥善保管其醫療機構之登入憑證，開發團隊對因使用者操作不當或裝置安全漏洞導致之資訊洩漏不負損害賠償責任。*
</sub><br>
<sub style="color: gray;">*在未經醫療人員確認前，請勿根據本應用程式之數據自行調整用藥或治療流程。*</sub><br>




# Patient Health Dashboard 
**SMART on FHIR Patient Health Data Integration App** [🔗](https://raychen21311.github.io/SMART-Test-Example2/)

This project is dedicated to building a patient-centered medical data integration solution using the HL7 FHIR international standard and the SMART on FHIR App framework. By enabling cross-institutional data exchange and intuitive visual monitoring, it addresses the pain points of clinical data fragmentation. As an open-source initiative, we welcome developers and healthcare institutions to freely use, modify, and extend its capabilities.

## 📋 Project Overview

This application aims to solve the problem of fragmented medical information, allowing healthcare professionals or patients to quickly browse comprehensive longitudinal records stored on FHIR servers through a single interface. The system not only provides physiological data trends but further integrates care plans and insurance utilization. 

### Core Features
* **Data Trends Overview**: Automatically fetches `Observation` resources to plot long-term trends for indicators such as blood pressure, BMI, body temperature, heart rate, and pain scores.
* **Medical Event Timeline**: Integrates `Encounter`, `Condition`, `Procedure`, and `DiagnosticReport` to present the patient's complete medical context through a visual timeline.
* **Labs & Reports Tracking**: Supports comparison of lab results with Reference Ranges and provides quick review of report content.
* **Smart CarePlan**: Clearly displays medical orders and care goals to improve patient compliance and physician-patient communication efficiency.
* **Utilization Analysis**: Integrates `Claim`, `ExplanationOfBenefit` (EOB), and `Immunization` to help track medical resource usage and vaccination status.

## 🛠 Technical Architecture

* **Standard**: HL7 FHIR R4
* **Authentication**: SMART App Launch (OAuth2 + PKCE)
* **Frontend**: Vanilla JavaScript, HTML5, CSS3 (Modular page design)
* **Data Visualization**: Chart.js + Luxon (Time-series analysis)
* **FHIR Library**: `fhirclient.js`

## 📂 File Structure

- `index.html`: Entry point of the application, executing the SMART Launch authorization flow.
- `patient-select.html`: Patient selection interface, supporting "Data Richness" assessment.
- `overview.html`: Physiological indicator trends dashboard.
- `timeline.html`: Clinical event timeline.
- `labs.html`: Lab data and diagnostic report analysis.
- `careplan.html`: Care plan tracking.
- `utilization.html`: Healthcare utilization, insurance, and vaccination information.

## 📖 User Guide

If you are a reviewer or tester, please follow these steps for a quick experience:

1.  **Launch App**: Click the link [🔗](https://raychen21311.github.io/SMART-Test-Example2/).
2.  **Simulated Authorization**: The system connects to a simulated sandbox by default. Simply click "Confirm" as prompted to simulate a real-world SMART Launch login process.
3.  **Select Patient**: Choose a patient to view visualized charts and data distribution.
4.  **Switch Tabs**: Use the navigation bar to browse the five core modules: **Overview**, **Timeline**, **Labs**, **CarePlan**, and **Utilization**.

---

## 🚀 For Developers

1.  **Client ID**:
    Currently, the app connects to a simulated sandbox environment. To facilitate a quick experience of SMART on FHIR’s data presentation capabilities, the authorization flow has been simplified.
    ```javascript
    FHIR.oauth2.authorize({
        clientId: "YOUR_CLIENT_ID",
        scope: "openid fhirUser patient/*.read",
        redirectUri: "patient-select.html",
        iss: "[https://thas.mohw.gov.tw/v/r4/sim/](https://thas.mohw.gov.tw/v/r4/sim/)..." // Test server URL
    });
    ```
2.  **Deployment**:
    This is primarily a frontend application that can be deployed on any static web server supporting HTTPS (e.g., GitHub Pages or Vercel). Developers are welcome to use it as a reference or extend it based on specific needs.
3.  **Running**:
    After accessing `index.html` and completing the OIDC flow, you can begin browsing patient data.

## 🔐 Security & Privacy

- Complies with SMART on FHIR security standards; no patient PII (Personally Identifiable Information) is stored on the server side.
- Utilizes **PKCE** (Proof Key for Code Exchange) to enhance authorization security.
- Follows the principle of least privilege, reading only authorized `patient/*.read` resources.

## ✨ Highlights

-   **Interoperability**: Compatible with the spirit of the Taiwan FHIR Implementation Guide (TW Core IG) and tested for integration with sandbox FHIR servers.
-   **User Experience**: Designed specifically for clinical scenarios, transforming complex JSON data into readable charts and timelines. 
-   **Scalability**: Modular design allows for future integration of AI prediction models or additional TW Core resources.

---
<sub style="color: gray;">*This project is for technical demonstration purposes. For clinical diagnosis, please refer to official reports from medical institutions.*</sub><br>
<sub style="color: gray;">*All health data, lab reports, and trend charts displayed by this application are for general reference and personal health management support only and do not constitute professional medical advice, diagnosis, or treatment plans.*</sub><br>
<sub style="color: gray;">*The accuracy and timeliness of data are limited by the quality of the source FHIR Server. The development team assumes no legal responsibility for errors, omissions in raw data, or loss during transmission.*</sub><br>
<sub style="color: gray;">*This interface only aggregates and visualizes raw medical data. The system itself does not possess any automated diagnostic or suggestion functions; please do not use it to replace clinical judgment by a physician.*</sub><br>
<sub style="color: gray;">*Users should safeguard their login credentials for medical institutions. The development team is not liable for information leaks caused by improper user operation or device security vulnerabilities.*</sub><br>
<sub style="color: gray;">*Do not adjust medications or treatment processes based on the data in this application without confirmation from medical personnel.*</sub>


