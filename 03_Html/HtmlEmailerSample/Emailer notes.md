# HTML Email

# What You Should Know About HTML Email

## 1. Defining !DOCTYPE
- Using an XHTML doctype generally has the fewest quirks and inconsistencies between documents. 
- The Content-Type meta tag is for rendering engine to process text and special characters. (e.g., & becomes &amp; for ampersand)
- The viewport meta tag is telling the device to set the viewable area to the width of the device’s screen
-  a meaningful title because this is what people will see when they view the email in a browser, or share it with their friends.

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Demystifying Email Design</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
```

## 2. Email is All About Tables
Due to the lack of standards support in email, it’s not possible to use divs, sections or articles — instead you have to use tables. Moreover, you need to use lots and lots of nested tables because neither the **colspan nor rowspan** attributes are properly supported.

### Paragraphs or Cells?
Lack of standards support, it’s not a great idea to use standard tags like h1, h2, h3 or p. I find that these can render really inconsistently across email client.

Your best bet is to place every block of text into its own cell and apply inline styling to that cell, for example:
```
<tr>
 <td style=“font-size: 12px; font-family: Arial, sans-serif; color: #666666;”>
   Text
 </td>
</tr>
```

### Inline Styles or Stylesheets?
Use inline styles

Don’t forget: You can’t apply multiple classes to things in HTML email because it is not supported. Every element can have a maximum of one class.

Also don’t forget: You can’t use shorthand for things like font size (i.e. style="font: 8px/14px Arial, sans-serif;") because it is not supported.

### Image Names and SPAM Scores
When saving out images remember that it’s good to give your images names that are short and meaningful
Names like "campaign_054_design_0x0_v6_email-link.gif" are likely to have a much higher SPAM score than "email.gif".

### Image Size
It’s also a really great idea to try to keep your entire email as small as humanly possible: under 100kb is ideal but not always possible, under 250kb is pretty standard.


### bgColor
use html bgcolor attribute
```html
 <td bgcolor="#70bbd9">
   Row 1
</td>
```

### Using Padding
When using padding in email, you must always specify every single value (top, right, bottom and left) otherwise you can get unpredictable results.

```html
padding-top: 10px; padding-right: 10px; padding-bottom: 8px; padding-left: 5px;.
```

If you are having even greater troubles with padding (for example, if your send platform is stripping out your CSS), don’t use it at all. Simply use empty cells to create space. There is no need to use spacer GIFs, just make sure you add ```style="line-height: 0; font-size: 0;"``` to the cell, place an ```&nbsp;``` inside and give it an explicit height or width. Here is an example:

```html
<tr><td style="font-size: 0; line-height: 0;" height="10">&nbsp;</td></tr>
```

Also note that it’s safe to use padding on **TD tags but not on P tags or DIVs.** They behave a lot more unpredictably.








### Reference Links

To make internal style to apply inline Goto [Inliner](https://inliner.cm/)

See, [Html BoilerPlate](https://webdesign.tutsplus.com/articles/say-hello-to-the-html-email-boilerplate--webdesign-5143?_ga=2.10239671.301790333.1517303970-2075586305.1516186033)

See, [Build from Scratch](https://webdesign.tutsplus.com/articles/build-an-html-email-template-from-scratch--webdesign-12770?_ga=2.118182667.301790333.1517303970-2075586305.1516186033)

See, [Responsive HTML Email](https://webdesign.tutsplus.com/articles/creating-a-simple-responsive-html-email--webdesign-12978)

See, [Media Querires](https://webdesign.tutsplus.com/tutorials/creating-a-future-proof-responsive-email-without-media-queries--cms-23919)


