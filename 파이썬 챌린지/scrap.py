from bs4 import BeautifulSoup
import requests

def extract_jobs(term):
  url = f"https://remoteok.com/remote-{term}-jobs"
  request = requests.get(url, headers={"User-Agent": "Kimchi"})
  if request.status_code == 200:
    information = []
    soup = BeautifulSoup(request.text, "html.parser")
    # write your ✨magical✨ code here
    company_positions = soup.find_all("td", class_='company_and_position')
    for company_position in company_positions:
    # 타이틀 추출 title
        title = company_position.find("h2").string
    # 회사 추출 company
        h3 = company_position.find_all("h3")
        company = h3[0].string
    #링크 추출 link
        urls = company_position.find_all("a")
        for url in urls:
            href = url['href']
            link = f'https://remoteok.com/{href}'
            job_data = {
                    "title" : title.strip(),
                    "company" : company.strip(),
                    "url" : link.strip(),
                }
            information.append(job_data)
    print(information)
  else:
    print("Can't get jobs.")

term = input("What search for?")
extract_jobs(term)

