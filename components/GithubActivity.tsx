import { ApiResponse, Contribution } from "@/utils/types";
import Calendar, { type ThemeInput } from "react-activity-calendar";

const GITHUB_USERNAME = "vansh-vm04";

const fetchGitHubData = async (): Promise<ApiResponse> => {
  try {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}`,
    );
    if (!response.ok) {
      return { contributions: [], total: {} };
    }
    return response.json();
  } catch {
    return { contributions: [], total: {} };
  }
};

export default async function GithubActivity() {
  const data = await fetchGitHubData();
  const { totalCommits, filteredData } = transformData(data.contributions);

  return (
    <section id="github-activity" className="w-full my-6">
      <h1 className="text-white text-lg font-medium mb-2">Github Activity</h1>
      <div className="github-calendar-wrapper">
      <Calendar
        weekStart={0}
        labels={defaultLabels}
        data={filteredData}
        hideMonthLabels
        totalCount={totalCommits}
        theme={gitHubTheme}
        colorScheme={"dark"}
        maxLevel={4}
        blockSize={9.66}
        blockMargin={2}
        style={{ color: "white", fontFamily: "monospace" }}
      />
      </div>
    </section>
  );
}

const defaultLabels = {
  totalCount: `{{count}} contributions in the last year`,
};

const gitHubTheme: ThemeInput = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: ["#1b1f24", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

const DAYS_IN_WEEKS = 7;
const WEEKS = 55;

const today = new Date();
const dayOfWeek = today.getUTCDay();

const totalDays = WEEKS * DAYS_IN_WEEKS - (6 - dayOfWeek);

const transformData = (data: Contribution[] | undefined) => {
  if (!data || !Array.isArray(data)) {
    return { filteredData: [], totalCommits: 0 };
  }

  const today = new Date();

  const filteredData = data
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .filter((a) => new Date(a.date) < today)
    .reverse()
    .slice(0, totalDays)
    .reverse();

  const totalCommits = data.reduce((sum, item) => sum + item.count, 0);

  return { filteredData, totalCommits };
};
