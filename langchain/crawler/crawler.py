import requests
from bs4 import BeautifulSoup


def get_content(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    # 提取网页标题
    title = soup.find('title').get_text()

    # 提取网页正文内容
    content = soup.find('div', class_='contentsArea').get_text()

    return title, content


# 要爬取的网页URL
url = 'https://www.moj.go.jp/isa/applications/procedures/16-4.html'

# 获取网页内容
title, content = get_content(url)

# 将内容保存到文件
with open('webpage_content.txt', 'w', encoding='utf-8') as file:
    file.write(f'Title: {title}\n\n')
    file.write(f'Content:\n{content}')

print("网页内容已保存到 webpage_content.txt 文件中。")
